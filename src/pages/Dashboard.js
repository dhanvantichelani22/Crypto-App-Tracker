// https://www.coingecko.com/en/api/documentation
import React, { useEffect, useState } from 'react'
import TabsComponent from '../components/Dashboard/Tabs';
import axios from 'axios';
import Search from '../components/Dashboard/Search';
import PaginationComponent from '../components/Dashboard/Pagination';
import Header from "../components/Common/Header";
import Loader from '../components/Common/Loader';
// import HeaderCoin from "../components/Common/HeaderCoin";
import TopButton from '../components/Common/BackToTop';
import {get100Coins} from '../functions/get100Coins';

function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [coins,setCoins]=useState([]);
  const [paginatedCoins,setPaginatedCoins]=useState([]);
  const[search,setSearch]=useState("");
  const [pageNumber, setPageNumber] = useState(1);
 
  const handlePageChange = (event, value) => {
    setPageNumber(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  // search folder
  const onSearchChange=(e)=>{
    // console.log(e.target.value);
   setSearch(e.target.value);
  };

  var filteredCoins = coins.filter((item)=>{
      if(
        item.name.toLowerCase().includes(search.toLowerCase())|| 
      item.symbol.toLowerCase().includes(search.toLowerCase()) 
      ){
        return item;
      }
      });
    
  // useEffect-> runs whenever our page reload 
  useEffect(()=>{
    // fetch(
    //   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    //   );
    getData();
  },[]);

  const getData = async ()=>{
    const myCoins = await get100Coins();
    if(myCoins){
      setCoins(myCoins);
    setPaginatedCoins(myCoins.slice(0,10));
    setLoading(false);
    }
  }
  return (
    <>
     <Header/>
     <TopButton/>
    {loading ? (
      <Loader/>
    ) : (
    <div>
    
     <Search search={search} onSearchChange={onSearchChange}/>
     <TabsComponent coins={search ? filteredCoins : paginatedCoins}
     setSearch={setSearch}/>
     {!search && (
     <PaginationComponent 
        page={pageNumber} 
        handlePageChange={handlePageChange}
        />
        )}
    </div>

  )}
  </>
  );
}

export default DashboardPage;