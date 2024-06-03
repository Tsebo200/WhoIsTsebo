import React from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
import Logo from '../Logo/Logo';
import Me from "../Me/Me";

function NavBar() {
  return (

    <div className={styles.header}>
    <Logo/>
      <div className={styles.links_container}>
       <Link to="/#home">Home</Link>

       <div id='nameOfThing'>-Thing you want to scroll to-</div> <a href='#home'>wrap a tag around the clickable that will scroll you there</a> 

        <Link to="/#gallery">Gallery</Link>
        <Link to="/#allme">All About Me</Link>
        <Link to="/#test">Test</Link>
      </div>
      <Me/>
    </div>
  );
}

export default NavBar;
