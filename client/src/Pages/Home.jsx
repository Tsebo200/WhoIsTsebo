import React from "react";
import styles from "../Pages/Home.module.scss";
import NavBar from "../Components/NavBar/NavBar.jsx";
import Logo from "../Components/Logo/Logo";
import Header from "../Components/Header/Header";
// import Gallery from "./Gallery";

function Home() {
  return (
    <div>
    <NavBar />
    <Logo/>
    <Header/> 
    {/* <Gallery/>  */}
      {/* <div className={styles.text}>Hello World</div> */}
    </div>
  );
}

export default Home;
