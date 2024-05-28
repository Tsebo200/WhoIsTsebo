import React from 'react'
import styles from "../Pages/Main.module.scss";
import MainNavBar from "../Component/NavBar/MainNavBar";

function Main() {
  return (
    <div>
      <MainNavBar/>
    {/* <div>Main</div> */}
    <div className={styles.content_container}></div>
    </div>
  )
}

export default Main