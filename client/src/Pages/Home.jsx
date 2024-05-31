import React from "react";
import styles from "../Pages/Home.module.scss";
import NavBar from "../Component/NavBar/NavBar";
import Logo from "../Component/Logo/Logo";
import Header from "../Component/Header/Header";


function Home() {
  return (
    <div>
      <NavBar />
      <Logo/>
      <Header/>
      {/* <div className={styles.tex}>Hello World</div> */}
    </div>
  );
}

export default Home;
