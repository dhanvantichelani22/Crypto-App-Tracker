import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from "../components/Common/Header";
import Loader from '../components/Common/Loader';
import List from "../components/Dashboard/List";
import CoinInfo from '../components/Coin/CoinInfo';
import TogglePriceType from "../components/Coin/PriceType";
import LineChart from '../components/Coin/LineChart';
import SelectDays from '../components/Coin/SelectDays';
import {convertDate} from '../functions/convertDate';
import {coinObject} from "../functions/coinObject";
import {getCoinData} from '../functions/getCoinData';
import {getCoinPrices} from '../functions/getCoinPrices';
import {settingChartData} from '../functions/settingChartData';

function CoinPage() {
    const { id } = useParams();
    const[loading,setLoading]=useState(true);
    const[coinData,setCoinData]=useState();
    const[days,setDays] = useState(60);
    // {}->empty object
    const [chartData, setChartData] = useState({});
    const [priceType, setPriceType] = useState("prices");

useEffect(() => {
  if(id){
    getData();
}
}, [id]);

async function getData(){
//  const getData = async () => {
  const data = await getCoinData(id);
  if(data){
    coinObject(setCoinData,data);
    // fetch price according to id & days
    const prices = await getCoinPrices(id,days, priceType);
    if(prices){
      settingChartData(setChartData,prices);
      // console.log("woray!!");
      // setChartData({
      //   labels: prices.map((price)=>convertDate(price[0])),
      //   datasets:[
      //     {
      //       data:prices.map((price)=>price[1]),
      //       borderColor:"#3a80e9",
      //       borderWidth:2,
      //       fill:true,
      //       tension:0.25,
      //       backgroundColor:"rgba(58,128,233,0.1)",
      //       pointRadius:0,
      //     },
      //   ],
      // });
     setLoading(false);
    }
  }  
 }

 const handleDaysChange = async(event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id,event.target.value,priceType);
    if(prices){
      settingChartData(setChartData,prices);
      setLoading(false);
    }
  };
  
  const handlePriceTypeChange = async(event,newType) => {
    setLoading(true);
    setPriceType(newType);
    const prices = await getCoinPrices(id,days,newType);
    if(prices){
      settingChartData(setChartData,prices); 
    }
    setLoading(false);
      // console.log(prices);
    };

  return (
    <div>
      <Header/>
      {loading ?(
      <Loader/> 
      ):( 
      <>
      <div className='grey-wrapper' style={{padding:"0rem 1rem"}}>
      <List coin={coinData}/>
      </div>
      <div className='grey-wrapper'>
      <SelectDays days={days} handleDaysChange={handleDaysChange}/>
      <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
      {/* {chartData.length>0 && <LineChart chartData={chartData}/>} */}
      <LineChart chartData={chartData} priceType={priceType}/>
      </div>
      <CoinInfo heading={coinData.name} description={coinData.desc}/>
      </>
      )}
    </div>
  )
}

export default CoinPage;