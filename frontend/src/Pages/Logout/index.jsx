import React from 'react'
import { useEffect } from "react"
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { BASE_URL } from '../../Constant';




export const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.post(BASE_URL+`logout/`, 
                    {refresh: localStorage.getItem('refresh_token')}, 
                    { headers: { 'Content-Type': 'application/json'}},
                    { withCredentials: true });
                localStorage.clear();
                axios.defaults.headers.common['Authorization'] = null;
                navigate("/login");
            } catch (e) {
                console.log('logout not working', e)
            }
        })();
    }, []);
    return (
        <div></div>
    )
}
export default Logout
