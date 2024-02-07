import { createContext, useState, useEffect } from 'react'
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../Constant';





const AuthContext = createContext()
export default AuthContext;

export const AuthProvider = ({children}) => {
    let userData = JSON.parse(localStorage.getItem("userData"));
    let [authAccessTokens, setAuthAccessTokens] = useState(() => (userData ? jwtDecode(userData?.tokens?.access) : null))
    let [authRefreshTokens, setAuthRefreshTokens] = useState(() => (userData ? jwtDecode(userData?.tokens?.refresh) : null))
    let [user, setUser] = useState(() => (userData ? userData : null))

    let [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    let loginUser = async (e) => {
        e.preventDefault()
        const response = await fetch(BASE_URL+`login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: e.target.email.value, password: e.target.password.value })
        });

        let data = await response.json();

        if(data){
            localStorage.setItem('userData', JSON.stringify(data));
            setAuthAccessTokens(jwtDecode(data?.tokens?.access))
            setAuthRefreshTokens(jwtDecode(data?.tokens?.refresh))
            setUser(data)
            navigate('/')
        } else {
            alert('Something went wrong while loggin in the user!')
        }
    }

    let logoutUser = (e) => {
        e.preventDefault()
        localStorage.removeItem('userData')
        setAuthAccessTokens(null)
        setAuthRefreshTokens(null)
        setUser(null)
        navigate('/')
    }


    const updateToken = async () => {
        const response = await fetch(BASE_URL+`token/refresh/`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({refresh:authRefreshTokens})
        })

        const data = await response.json()
        if (response.status === 200) {
            setAuthAccessTokens(jwtDecode(data?.access))
            setUser(data)
            localStorage.setItem('userData', JSON.stringify(data));
        } else {
            logoutUser()
        }

        if(loading){
            setLoading(false)
        }
    }

    useEffect(()=>{
        const REFRESH_INTERVAL = 1000 * 60 * 4 // 4 minutes
        let interval = setInterval(()=>{
            if(authAccessTokens){
                updateToken()
            }
        }, REFRESH_INTERVAL)
        return () => clearInterval(interval)

    },[authAccessTokens])


    let contextData = {
        user: user,
        authAccessTokens: authAccessTokens,
        authRefreshTokens: authRefreshTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}