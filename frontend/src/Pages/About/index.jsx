import React from 'react'
import Breadcrumbs from '../../CommonElements/Breadcrumbs'
import AboutContain from '../../Components/About'
import Header from '../../Layout/Header'
import Footer from '../../Layout/Footer'


const index = () => {
  return (
    <div>
        <Header />
            <div className="main-content">
                <div className="page-content">
                    <Breadcrumbs title="About" />
                    <AboutContain />
                </div>
            </div>
            <Footer />
    </div>
  )
}

export default index