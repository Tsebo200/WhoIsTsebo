import React from 'react';
import styles from '../AllTest/TestSection.module.scss';
import CheckExample from '../CheckExample/CheckExample';

function TestSection() {
  return (
    <>
      {/* <p>TestSection</p> */}
      <div className={styles.mainContainer}>
        <div className={styles.LeftContainer}>
          <div className={styles.teamOneContainer}>


            <div className={styles.checkbox}>
            <CheckExample/>
            </div>


            <p className={styles.teamText}>Real Madrid</p>
          </div>
          <div className={styles.teamTwoContainer}>
          <div className={styles.checkbox}></div>
            <p className={styles.teamText}>PSG</p>
          </div>
          <div className={styles.teamThreeContainer}>
          <div className={styles.checkbox}></div>
          <p className={styles.teamText}>Man City</p>
          </div>
          <div className={styles.teamFourContainer}>
          <div className={styles.checkbox}></div>
          <p className={styles.teamText}>Barcelona</p>
          </div>
        </div>


        <div className={styles.rightContainer}>
        <div className={styles.teamOneContainer}>
            <div className={styles.checkbox}></div>
            <p className={styles.teamText}>Dortmund</p>
          </div>
          <div className={styles.teamTwoContainer}>
          <div className={styles.checkbox}></div>
            <p className={styles.teamText}>Liverpool</p>
          </div>
          <div className={styles.teamThreeContainer}>
          <div className={styles.checkbox}></div>
            <p className={styles.teamText}>Bayern</p>
          </div>
          <div className={styles.teamFourContainer}>
          <div className={styles.checkbox}></div>
            <p className={styles.teamText}>Man United</p>
          </div>


        </div>
      </div>

    </>
  )
}

export default TestSection