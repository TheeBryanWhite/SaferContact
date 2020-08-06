import React from 'react';
import SEO from '../components/seo'

import Layout from '../components/layout/layout'

const Success = () => {

    return (
        <Layout>
            <SEO title="Safer Contact - Message received" />
            <div className="page-content">
                <h2>Message received!</h2>
                <p>We'll be in touch with you ASAP.</p>
            </div>
        </Layout>
    )
}

export default Success 
