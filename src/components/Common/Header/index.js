import "./style.css";
import React from 'react'
import TemporaryDrawer from "./drawer";
import Button from "../Button";
import { Link } from "react-router-dom";
import HeaderCoin from "../HeaderCoin";

const index = () => {
  return (
    <div className="navbar">
     <h1 className="heading">
      CryptoTracker<span style={{color:"var(--gold)"}}>.</span>
      </h1>
      <div className="links">
        <HeaderCoin/>
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="link">WatchList</p>
        </Link>
        <Link to="/dashboard">
          {/* <p className="link"> */}
            <Button text={"Dashboard"}
            onClick={()=>console.log("Button click")}/>
          {/* </p> */}
        </Link>
        {/* <Button text={"Share"}
            outlined={true}
            onClick={()=>console.log("Button click")}/> */}
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer/>
      </div>
    </div>
  );
}

export default index;


