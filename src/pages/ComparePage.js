import React, { useEffect, useState } from 'react'
import Header from "../components/Common/Header";
import SelectCoins from '../components/Compare/SelectCoins';
import SelectDays from '../components/Coin/SelectDays';
import Loader from '../components/Common/Loader';
import { coinObject } from '../functions/coinObject';
import { settingChartData } from '../functions/settingChartData';
import {getCoinPrices} from '../functions/getCoinPrices';
import {getCoinData} from '../functions/getCoinData';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import LineChart from '../components/Coin/LineChart';
import TogglePriceType from '../components/Coin/PriceType';

function ComparePage() {
  const [allCoins, setAllCoins] = useState([]);
  const [crypto1,setCrypto1]=useState(allCoins[0]?.id ?? "bitcoin");
    const [crypto2,setCrypto2]=useState(allCoins[1]?.id ?? "ethereum");
    const [days,setDays]=useState(30);
    const [loading, setLoading] = useState(true);
    const [crypto1Data,setCrypto1Data]=useState({});
    const [crypto2Data,setCrypto2Data]=useState({});
    const [priceType,setPriceType]=useState("prices");
    const [chartData,setChartData]=useState({});

    async function handleDaysChange(event){
      setLoading(true);
       setDays(event.target.value);
       const prices1 = await getCoinPrices(crypto1,event.target.value,priceType);
       const prices2 = await getCoinPrices(crypto2,event.target.value,priceType);
       settingChartData(setChartData,prices1,prices2);
       setLoading(false);
    }
    const handlePriceTypeChange = async(event,newType) => {
      setLoading(true);
      setPriceType(newType);
      console.log(newType)
      const prices1 = await getCoinPrices(crypto1,days,newType);
      const prices2 = await getCoinPrices(crypto2,days,newType);
      settingChartData(setChartData,prices1,prices2);
      setLoading(false);
      };
    
    useEffect(()=>{
     getData();
    },[])

    async function getData(){
      setLoading(true);
      const data1 = await getCoinData(crypto1);
      
      if(data1){
        coinObject(setCrypto1Data,data1);
      const data2 = await getCoinData(crypto2);
      if(data2){
        coinObject(setCrypto2Data,data2);
       const prices1 = await getCoinPrices(crypto1,days,priceType);
       const prices2 = await getCoinPrices(crypto2,days,priceType);
          settingChartData(setChartData,prices1,prices2);
          console.log("Both prices",prices1,prices2);
         setLoading(false);
        }
      }
    }

    const handleCoinChange = async(event,isCoin2)=>{
      setLoading(true);
      if(isCoin2){
        //setting state
        setCrypto2(event.target.value);
      // console.log("crypto2 id",event.target.value);
      const data = await getCoinData(event.target.value);
       coinObject(setCrypto2Data,data);
       const prices1 = await getCoinPrices(crypto1,days,priceType);
      const prices2 = await getCoinPrices(crypto2,days,priceType);
      if(prices1.length > 0 && prices2.length > 0){
        console.log("Both prices",prices1,prices2);
       setLoading(false);
      }
}   else {
        setCrypto1(event.target.value);
        const data = await getCoinData(event.target.value);
        coinObject(setCrypto1Data,data);
      }
      
    };

    return(
    <div>
        <Header/>
        {loading ?(
      <Loader/> 
      ):( 
      <>
        <div className='coin-days-flex'>
        <SelectCoins 
        crypto1={crypto1}  
        handleCoinChange={handleCoinChange}
        crypto2={crypto2}/>

        <SelectDays days={days} handleDaysChange={handleDaysChange}
        noPTag={true}/>
        </div>

        <div className='grey-wrapper' style={{padding:"0rem 1rem"}}>
      <List coin={crypto1Data}/>
      </div>

      <div className='grey-wrapper' style={{padding:"0rem 1rem"}}>
      <List coin={crypto2Data}/>
      </div>

      <div className='grey-wrapper'>
      <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
      <LineChart chartData={chartData} priceType={priceType} 
      multiAxis={true}/>
      </div>

      <CoinInfo heading={crypto1Data.name} description={crypto1Data.desc}/>
      <CoinInfo heading={crypto2Data.name} description={crypto2Data.desc}/>
        </> 
        )}
    </div>
  )
}
export default ComparePage;