import React from 'react';
import "./styles.css";

const index = ({text,onClick,outlined}) => {
  return (
    //render of outlined
    <div className={outlined ? "share-btn" :"dash-btn"} onClick={()=>onClick()}>
        {text}
    </div>
  )
}

export default index;