import React from 'react'
import Header from '../../src/components/Header'
import "./globalStyles.css"
import Styles from "./ladingPage.module.css"
import BannerBemVindo from '../../src/components/BannerBemVindo'

const LandingPage = () => {
  return (
    <div className={Styles.corpo}>
        <Header/>
        <BannerBemVindo/>
    </div>
  )
}

export default LandingPage