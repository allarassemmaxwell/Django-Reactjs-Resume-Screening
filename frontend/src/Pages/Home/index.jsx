import React from 'react'
import Header from '../../Layout/Header'
import Footer from '../../Layout/Footer'
import HomeContain from '../../Components/Home'


const Home = () => {

    return (
        <div>
            <Header />
            <div className="main-content">
                <div className="page-content">
                    <HomeContain />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home