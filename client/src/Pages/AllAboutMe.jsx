import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Logo from '../Components/Logo/Logo'
import Me from '../Components/Me/Me';
import CompleteAAMC from '../Components/AllAboutMeContent/CompleteAAMC';
import Footer from '../Components/Footer/Footer';

function AllAboutMe() {
  return (
    <div>
      <NavBar/>
      <Logo/>
      <Me/>
      <CompleteAAMC/>
      <Footer/>
    </div>
  )
}

export default AllAboutMe