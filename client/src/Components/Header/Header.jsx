import React from 'react'
import styles from '../Header/Header.module.scss';
// import intro from '../Intro/Intro.jsx'
import Footer from '../Footer/Footer'
import Intro from './Intro';

function Header() {
  return (
<>
    <div className={styles.anime_back}></div>
    <Intro/>
    {/* <div className={styles.intro}></div> */}
    {/* <Footer/> */}
</>
  )
}

export default Header