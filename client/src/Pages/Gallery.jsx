import React from 'react';
import Logo from '../Components/Logo/Logo';
import styles from '../Pages/Gallery.module.scss';
import NavBar from '../Components/NavBar/NavBar';

function Gallery() {
  return (
    <>
    <NavBar/>
    <div className={styles.spacer}></div>
    <Logo/>
    <h1>Gallery</h1>
    </>
  )
}

export default Gallery