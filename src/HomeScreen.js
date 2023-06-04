import React from 'react'
import "./HomeScreen.css"
import Nav from './Nav'
import Banner from './Banner';
function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      {/* Rows of Items */}
    </div>
  );
}

export default HomeScreen
