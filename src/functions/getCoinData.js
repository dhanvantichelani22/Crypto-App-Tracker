// common javascript file for fetch method
import axios from 'axios';
import React from 'react'

export const getCoinData = (id) => {
    const myData = axios
  .get(`https://api.coingecko.com/api/v3/coins/${id}`)
  .then((response)=>{
    //code for handling response
    // console.log("Response >>",response.data.description.en);
    // coinObject(setCoinData,response.data);
    return response.data;
    
  }).catch((error)=>{
    //code for handling error
    console.log("Error >>",error);
  });     
 return myData;
}

// export default getCoinData