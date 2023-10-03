import React from 'react';
import Header from "../components/Common/Header";
import MainComponent from "../components/LandingPage/MainComponent";
// import HeaderCoin from "../components/Common/HeaderCoin";

function HomePage() {
  return (
    <div>
        <Header/>
        {/* <HeaderCoin/> */}
      <MainComponent/>
    </div>
  )
}

export default HomePage;