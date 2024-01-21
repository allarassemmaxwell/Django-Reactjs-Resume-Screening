import React from 'react'
import ProfileContain from '../../../Components/Dashboard/Profile'
import Header from '../../../Layout/Header'
import Footer from '../../../Layout/Footer'

const index = () => {
  return (
    <div>
        <Header />
            <div className="main-content">
                <div className="page-content">
                    <ProfileContain />
                </div>
            </div>
            <Footer />
    </div>
  )
}

export default index