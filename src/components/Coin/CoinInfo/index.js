import React, { useState } from 'react'
import "./style.css";

function CoinInfo({heading,description}) {
  const smallDesc = description.slice(0,270)+"<p style='color:var(--grey)'> Read More..</p>";
  const longDesc = description +"<p style='color:var(--grey)'> Read Less..</p>";
  const [flag, setFlag] = useState(false);

  return (
    <div className='grey-wrapper' style={{padding: "0rem 1rem"}}>
        <h2 className="coin-heading">{heading}</h2>
        {description.length > 270 ? (
          <p onClick={() => setFlag(!flag)} 
           className="coin-desc" 
            dangerouslySetInnerHTML={{__html: !flag ? smallDesc : longDesc}}
      />
        ) : (
          <p dangerouslySetInnerHTML={{__html: description}} />
        )}
    </div>
  )
}

export default CoinInfo