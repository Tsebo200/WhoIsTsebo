import React, { useState } from 'react';
import styles from '../AllTest/TestSection.module.scss';
import CheckExample from '../CheckExample/CheckExample';
import FadeInOut from '../Fading/FadeInOut';


function TestSection() {
  const [showTeamOne, setShowTeamOne] = useState(true);
  const [showTeamTwo, setShowTeamTwo] = useState(true);
  const [showTeamThree, setShowTeamThree] = useState(true);
  const [showTeamFour, setShowTeamFour] = useState(true);
  const [showTeamFive, setShowTeamFive] = useState(true);
  const [favTeamOneColor, setFavTeamOneColor] = useState(''); // Initial color
  const [favTeamTwoColor, setFavTeamTwoColor] = useState(''); // Initial color
  const [favTeamThreeColor, setFavTeamThreeColor] = useState(''); // Initial color
  
  const toggleShowTeamOne = () => setShowTeamOne(!showTeamOne);
  const toggleShowTeamTwo = () => setShowTeamTwo(!showTeamTwo);
  const toggleShowTeamThree = () => setShowTeamThree(!showTeamThree);
  const toggleShowTeamFour = () => setShowTeamFour(!showTeamFour);
  const toggleShowTeamFive = () => setShowTeamFive(!showTeamFive);

  const handleFavTeamOneClick = () => {
    setFavTeamOneColor(favTeamOneColor === '' ? '#FECB9B' : ''); // Toggle color
  };

  const handleFavTeamTwoClick = () => {
    setFavTeamTwoColor(favTeamTwoColor === '' ? '#FECB9B' : ''); // Toggle color
    // setFavTeamOneColor(favTeamThreColor === '' ? '#FECB9B' : ''); // Toggle color
  };

  const handleFavTeamThreeClick = () => {
    setFavTeamThreeColor(favTeamThreeColor === '' ? '#FECB9B' : ''); // Toggle color
  };


  const extraStyles = {
    // position: "fixed",
    // top: "30px",
    // left: 0,
    // right: 0,
    // bottom: 0,
    // background: "rgba(0, 0, 0, 0.4)",
    // color: "#FFF"
  };

  return (
    <>
      {/* <p>TestSection</p> */}
      <div className={styles.mainContainer}>
        <div className={styles.LeftContainer}>

          {/* Fav Team One */}
          <div
            className={styles.teamOneContainer}
            onClick={handleFavTeamOneClick}
            style={{ backgroundColor: favTeamOneColor }}
          >
            <div className={styles.checkbox}></div>
            <p className={styles.teamText}>Barcelona</p>
          </div>

          {/* Team Two */}
          <FadeInOut show={showTeamOne} duration={500} style={extraStyles}>
            <div className={styles.teamTwoContainer} onClick={toggleShowTeamOne}>
              {/* <div onClick={toggleShow}>{show ? "hide" : "show"}</div> */}
              <div className={styles.checkbox}></div>
              <p className={styles.teamText}>PSG</p>
            </div>
          </FadeInOut>

          {/* Fav Team Two */}
          <div className={styles.teamThreeContainer}
           onClick={handleFavTeamTwoClick}
           style={{ backgroundColor: favTeamTwoColor }}>
            <div className={styles.checkbox}></div>
            <p className={styles.teamText}>Man City</p>
          </div>

          {/* Team Two */}
          <FadeInOut show={showTeamTwo} duration={500} style={extraStyles}>
            <div className={styles.teamFourContainer} onClick={toggleShowTeamTwo}>
              <div className={styles.checkbox}></div>
              <p className={styles.teamText}>Real Madrid</p>
            </div>
          </FadeInOut>
        </div>

        <div className={styles.rightContainer}>
          <FadeInOut show={showTeamThree} duration={500} style={extraStyles}>
            <div className={styles.teamOneContainer} onClick={toggleShowTeamThree}>
              <div className={styles.checkbox}></div>
              <p className={styles.teamText}>Dortmund</p>
            </div>
          </FadeInOut>

          <FadeInOut show={showTeamFour} duration={500} style={extraStyles}>
            <div className={styles.teamTwoContainer} onClick={toggleShowTeamFour}>
              <div className={styles.checkbox}></div>
              <p className={styles.teamText}>Liverpool</p>
            </div>
          </FadeInOut>

          {/* Fav Team Three */}
          <div className={styles.teamThreeContainer}
          onClick={handleFavTeamThreeClick}
          style={{ backgroundColor: favTeamThreeColor }}>
            <div className={styles.checkbox}></div>
            <p className={styles.teamText}>Bayern</p>
          </div>

          <FadeInOut show={showTeamFive} duration={500} style={extraStyles}>
            <div className={styles.teamFourContainer} onClick={toggleShowTeamFive}>
              <div className={styles.checkbox}></div>
              <p className={styles.teamText}>Man United</p>
            </div>
          </FadeInOut>
        </div>
      </div>
    </>
  )
}

export default TestSection