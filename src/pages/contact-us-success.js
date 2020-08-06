import React from 'react';
import SEO from '../components/seo'

import HomeLayout from '../components/layout/home-layout'

const Success = () => {

    return (
        <HomeLayout>
            <SEO title="Safer Contact - Message received" />
            <div className="page-content">
                <h2>Message received!</h2>
                <p>We'll be in touch with you ASAP.</p>
            </div>
        </HomeLayout>
    )
}

export default Success 
