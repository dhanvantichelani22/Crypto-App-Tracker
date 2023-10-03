import axios from 'axios';
import React from 'react'

export const getCoinPrices = (id,days,priceType) => {
    const prices = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
      ,{crossDomain:true}
    )
    .then((response)=>{
        console.log("Price>>>",response.data);
        return response.data[priceType];
      }).catch((error)=>{
        //code for handling error
        console.log("Error >>",error);
      });  
      return prices;
}

// export default getCoinPrices;