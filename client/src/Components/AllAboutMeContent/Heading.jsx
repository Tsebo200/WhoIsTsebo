import React from 'react';
import styles from '../AllAboutMeContent/Heading.module.scss'

function Heading() {
  return (
    <div className={styles.headingContainer}>
    <p className={styles.heading}>All About Me</p>
    <hr className={styles.horLine}></hr>
  </div>

  )
}

export default Heading