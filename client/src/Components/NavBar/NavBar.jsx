import React from 'react';
import { Link } from "react-router-dom";
import styles from "../NavBar/Nav.module.scss";

function NavBar() {
  return (
    <div className={styles.header}>
    <div className={styles.links_container}>

      <Link to="/">Home</Link>
      <Link to="/Gallery">Gallery</Link>
      <Link to="/AllMe">All About Me</Link>
      <Link to="/Test">Test</Link>
    </div>
  </div>
  )
}

export default NavBar