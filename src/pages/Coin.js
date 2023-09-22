import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from "../components/Common/Header";
import Loader from '../components/Common/Loader';
import {coinObject} from '../functions/coinObject';
import List from "../components/Dashboard/List";

function CoinPage() {
    const { id } = useParams();
    const[loading,setLoading]=useState(true);
    const[coinData,setCoinData]=useState(true);
useEffect(() => {
  if(id){
  axios
  .get(`https://api.coingecko.com/api/v3/coins/${id}`)
  .then((response)=>{
    //code for handling response
    console.log("Response >>",response);
    setLoading(false);
    coinObject(setCoinData,response.data);

  }).catch((error)=>{
    //code for handling error
    console.log("Error >>",error);
    setLoading(false);
  });     
}
}, [id]);

  return (
    <div>
      <Header/>
      {loading ? <Loader/> : <>
      <div className='coin-Data'>
      <List coin={coinData}/>
      </div>
      </>}
    </div>
  )
}

export default CoinPage;