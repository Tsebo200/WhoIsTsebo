import React from "react";
import styles from "../AllText/BabyText.module.scss";

function BabyTest() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.bodyContainer}>
          <div className={styles.questionMark}></div>

          <div className={styles.headingText}>
            <p>How Well Do You Know Tsebo</p>
          </div>
        </div>
        <div className={styles.questionText}>
            <p>
                What Are My 3 Favourite Fifa Team? 
            </p>
        </div>

        <div className={styles.hintText}>
            <p>
                Hint: Each Team Is In A Different League
            </p>
        </div>

        <div className={styles.teamsContainer}></div>

      </div>

      {/* <div className={styles.mainContainer}>
            <div className={styles.bodyContainer}>
            <div className={styles.questionMark}></div>
            <div className={styles.headingText}>
                <p>
                    How Well Do You Know Tsebo
                </p>
            </div>
            <div className={styles.questionText}></div>
        </div>
        </div> */}
    </>
  );
}

export default BabyTest;
