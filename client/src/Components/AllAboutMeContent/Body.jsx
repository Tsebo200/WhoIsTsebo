import React from 'react';
import styles from '../AllAboutMeContent/Body.module.scss'

function Body() {
  return (
    <>
    {/* <hr className={styles.horLine}></hr> */}
    <div className={styles.mainBodyContainer}>
    
        <div className={styles.leftContainer}>

        <p className={styles.leftHeading}>Personality</p>
        <div className={styles.leftText}>
    
            <p>I am a calm, creative and kind guy (I enjoy helping people where I can). 
                Social interactions are my main source of fun as I get to 
                learn interesting info about people. This explains why I am a good listener.
                I like to see the good in people and I believe that everyone is an expert in something.
                <br></br> 
                <br></br> 
                I do not like to lose my cool because I do not like myself when 
                I am upset. I get upset when I know I did not do my best in a task I do. 
                According to Jung Personality Test I am a mix of ESFP and a ESTP.</p>
        </div>
        </div>

        <div className={styles.rightContainer}>
        <p className={styles.rightHeading}>Traits</p>

        <div className={styles.rightText}>

                <p>
                I find my mind to be my greatest arsenal but it can be my greatest weakness at times. 
                I am a physical and visual learner, this helps me to remember important information or experiences.
                I can follow my instinct.
                I have a high EQ(emotional Intelligence).
                </p>
        </div>
        </div>

    </div>
    </>
  )
}

export default Body