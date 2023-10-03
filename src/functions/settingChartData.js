// import React from 'react'
import {convertDate} from "./convertDate";

export const settingChartData = (setChartData,prices1,prices2) => {
  console.log(prices1, prices2)
    if(prices2){
      setChartData({
        labels: prices1?.map((price) => convertDate(price[0])),
        datasets:[
          {
            label:"Crypto1",
            data: prices1?.map((price) => price[1]),
            // #DAA520 rgb(0, 128, 0)
            borderColor:"rgb(255, 165, 0)",
            borderWidth:3,
            fill:true,
            tension:0.25,
            // #7FFF00 rgb(199, 0, 57)
            // rgba(58,128,233,0.1)
            backgroundColor:"rgba(58,128,233,0.1)",
            borderColor:"rgb(255, 165, 0)",
            pointRadius:0,
            yAxisID:'crypto1',
          },
          {
            label:"Crypto2",
            data: prices2?.map((price) => price[1]),
            // #DAA520 rgb(0, 128, 0)
            borderColor:"#EB0988",
            borderWidth:3,
            fill:true,
            tension:0.25,
            // #7FFF00 rgb(199, 0, 57)
            // rgba(58,128,233,0.1)
            backgroundColor:"rgba(58,128,233,0.1)",
            borderColor:"#EB0988",
            pointRadius:0,
            yAxisID:'crypto2',
          },
        ],
      });
    }
    else{
      setChartData({
        labels: prices1?.map((price) => convertDate(price[1])),
        datasets:[
          {
            data: prices1?.map((price) => price[1]),
            // #DAA520 rgb(0, 128, 0)
            borderColor:"rgb(255, 165, 0)",
            borderWidth:3,
            fill:true,
            tension:0.25,
            // #7FFF00 rgb(199, 0, 57)
            // rgba(58,128,233,0.1)
            backgroundColor:"rgba(58,128,233,0.1)",
            borderColor:"rgb(255, 165, 0)",
            pointRadius:0,
            yAxisID:'crypto1',
          },
        ],
      });
    }
};
