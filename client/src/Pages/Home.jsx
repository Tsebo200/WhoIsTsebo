import React from "react";
import styles from "../Pages/Home.module.scss";
import NavBar from "../Components/NavBar/NavBar.jsx";
import Logo from "../Components/Logo/Logo";
import Header from "../Components/Header/Header";
import Me from "../Components/Me/Me.jsx";
import Gallery from "./Gallery";
import Footer from "../Components/Footer/Footer.jsx";

function Home() {
  return (
    <div>
    <NavBar/>
    <Logo/>
    <Me/>
    <Header/> 
    <Footer/> 
      {/* <div className={styles.text}>Hello World</div> */}
    </div>
  );
}

export default Home;
