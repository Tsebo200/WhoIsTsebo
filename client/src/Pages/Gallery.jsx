import React from "react";
import Logo from "../Components/Logo/Logo";
import styles from "../Pages/Gallery.module.scss";
import NavBar from "../Components/NavBar/NavBar";
// import Example from "../Components/Example/Example";
import Me from "../Components/Me/Me";
import SlideShow from "../Components/SlideShow/SlideShow";
import SlideShowTwo from "../Components/SlideShowTwo/SlideShowTwo";
import SlideShowThree from "../Components/SlideShowThree/SlideShowThree";
import Footer from "../Components/FooterGallery/Footer";

function Gallery() {


  return (
    <>
      <NavBar/>
      <Logo/>
      <Me/>
      <div className={styles.headingContainer}>
        <p className={styles.heading}>Gallery</p>
        <hr className={styles.horLine}></hr>
      </div>



      <div className={styles.contentContainer}>
        <p className={styles.introText}>Interesting Facts About Tsebo</p>
           {/* <SlideShow/> */}
        {/* <Example/> */}
   


        <div className={styles.imgOne}>
        <SlideShow/>
        </div>
        <div className={styles.imgTwo}>

        <SlideShowTwo/>
        </div>
        <div className={styles.imgThree}>
        <SlideShowThree/>
        </div>
        <div className={styles.chevronContainer}>

          <p className={styles.detailOne}>
            Dream Dates
          </p>
          <p className={styles.detailTwo}>
            Shoe WishList
          </p>
          <p className={styles.detailThree}>
            Favourite Series
          </p>
        </div>
   
      </div>
      <Footer/>
    </>
  );
}

export default Gallery;
