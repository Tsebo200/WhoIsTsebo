import React from 'react';
import styles from '../Pages/Test.module.scss';
import NavBar from "../Components/NavBar/NavBar";
import Logo from "../Components/Logo/Logo";
import Me from "../Components/Me/Me";
import BabyTest from '../Components/AllText/BabyTest';
import Footer from "../Components/Footer/Footer.jsx";

function Test() {
  return (
    <>
      <NavBar/>
      <Logo/>
      <Me/>
       <div className={styles.headingContainer}>
        <p className={styles.heading}>Test</p>
        <hr className={styles.horLine}></hr>
      </div>
      <BabyTest/>
      <Footer/>

      </>

  )
}

export default Test