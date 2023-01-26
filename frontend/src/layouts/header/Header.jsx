import MainNavbar from "../../Components/Navbar/MainNavbar";
import TopMenu from "../../Components/Navbar/TopMenu";
// import React, { useState } from "react"
// import { nav } from "../../assets/data/Data"
// import { Link } from "react-router-dom"

const Header = () => {
  // const [navList, setNavList] = useState(false)
  return (
    <>
      <header>
        <TopMenu />
        <MainNavbar />
      </header>
    </>
  )
}

export default Header
