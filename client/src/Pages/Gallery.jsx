import React from "react";
import Logo from "../Components/Logo/Logo";
import styles from "../Pages/Gallery.module.scss";
import NavBar from "../Components/NavBar/NavBar";
import Example from "../Components/Example/Example";

function Gallery() {


  return (
    <>
      <NavBar />
      <Logo />
      <div className={styles.headingContainer}>
        <p className={styles.heading}>Gallery</p>
        <hr className={styles.horLine}></hr>
      </div>



      <div className={styles.contentContainer}>
        <p className={styles.introText}>Feel Free To Hover For More Info</p>
        <Example/>
{/* 
        <div className={styles.imgOne}></div>
        <div className={styles.imgTwo}></div>
        <div className={styles.imgThree}></div>
        <div className={styles.chevronContainer}>
          <div className={styles.chevronSectionOne}>
            
          </div>
          <div className={styles.chevronSectionTwo}></div>
          <div className={styles.chevronSectionThree}></div>
        </div> */}
      </div>
    </>
  );
}

export default Gallery;
