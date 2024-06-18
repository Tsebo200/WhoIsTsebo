import React from 'react';
import styles from '../Pages/Test.module.scss';
import NavBar from "../Components/NavBar/NavBar";
import Logo from "../Components/Logo/Logo";
import Me from "../Components/Me/Me";
import BabyTest from '../Components/AllTest/BabyTest';
import Footer from '../Components/FooterTest/Footer';

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