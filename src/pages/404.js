import React from "react"

import NFLayout from '../components/layout/404-layout'
import SEO from "../components/seo"

import "./home.scss";

const NotFoundPage = () => {

  return (
  <NFLayout>
    <SEO title="Safer Contact - 404: Not found" />
      <div className="page-content">
        <p>Quoth the raven...</p>
        <h2>404</h2>
      </div>
  </NFLayout>
  )
}

export default NotFoundPage
