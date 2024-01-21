import React from 'react'
import Breadcrumbs from '../../CommonElements/Breadcrumbs'
import ContactContain from '../../Components/Contact'
import Header from '../../Layout/Header'
import Footer from '../../Layout/Footer'

const index = () => {
    return (
        <div>
            <Header />
            <div className="main-content">
                <div className="page-content">
                    <Breadcrumbs title="Contact"/>
                    <ContactContain />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default index