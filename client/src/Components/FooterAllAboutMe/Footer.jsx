import React from 'react'
import styles from '../FooterAllAboutMe/Footer.module.scss';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
        <div className={styles.mainFooterContainer}>
            

            
                <div className={styles.logoContainer}>
                <div className={styles.textContainer}>
                <p className={styles.copyrightText}>Copyright © 2020 Tsebo Ramonyalioa</p>
                </div>
                <div className={styles.logoOneBox}>
                <Link to="https://anilist.co/user/Kurohyou/"></Link>
                </div>
                <div className={styles.LogoTwoBox}>
                <Link to="https://github.com/Tsebo200"></Link>
                </div>
                <div className={styles.logoThreeBox}>
                <Link to="https://www.instagram.com/inspiration__200/"></Link>
                </div>
     
            </div>
            
        </div>
    </div>
  )
}

export default Footer