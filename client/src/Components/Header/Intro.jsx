import React from "react";
import styles from "../Header/Intro.module.scss";

function Intro() {
  return (
    <div>
      <div className={styles.introText}>
        <div className={styles.IntroTextHeading}>
          <p>Tsebo Ramonyalioa</p>
        </div>
        <div className={styles.textContainer1}>
          <div className={styles.IntroTextBody1}>
            <p>
              Junior UI/UX Designer /FIFA lover Center link /Explorer /Anime
              Junkie
            </p>
          </div>
        </div>

        <div className={styles.textContainer2}>
          <div className={styles.IntroTextBody2}>
            <p>
              A fun and creative 01’ that just loves to sprinkle kindness
              everywhere he goes
            </p>
          </div>
        </div>

        <div className={styles.findMeContainer}>

          <div className={styles.magnifyingBox}></div>
          <p className={styles.findMeText}>
            Find Out More ABout Me
          </p>

        </div>

        
      </div>
    </div>
  );
}

export default Intro;
