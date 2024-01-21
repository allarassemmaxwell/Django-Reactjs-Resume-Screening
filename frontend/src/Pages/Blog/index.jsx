import React from 'react'
import Breadcrumbs from '../../CommonElements/Breadcrumbs'
import BlogContain from '../../Components/Blog'
import Header from '../../Layout/Header'
import Footer from '../../Layout/Footer'

const index = () => {
    return (
        <div>
            <Header />
            <div className="main-content">
                <div className="page-content">
                    <Breadcrumbs title="Blog" />
                    <BlogContain />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default index