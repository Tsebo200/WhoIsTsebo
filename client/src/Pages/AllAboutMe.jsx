import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Logo from '../Components/Logo/Logo'
import Me from '../Components/Me/Me';
import AllAboutMeContent from '../Components/AllAboutMeContent/Heading';

function AllAboutMe() {
  return (
    <div>
      <NavBar/>
      <Logo/>
      <Me/>
      <AllAboutMeContent/>
    </div>
  )
}

export default AllAboutMe