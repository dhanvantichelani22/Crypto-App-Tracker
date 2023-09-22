// https://www.coingecko.com/en/api/documentation
import React, { useEffect, useState } from 'react'
import TabsComponent from '../components/Dashboard/Tabs';
import axios from 'axios';
import Search from '../components/Dashboard/Search';
import PaginationComponent from '../components/Dashboard/Pagination';
import Header from "../components/Common/Header";
import Loader from '../components/Common/Loader';
import TopButton from '../components/Common/BackToTop';

function DashboardPage() {
  const [coins,setCoins]=useState([]);
  const [paginatedCoins,setPaginatedCoins]=useState([]);
  const[search,setSearch]=useState("");
  const [loading, setLoading] = useState(true);
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

  var filteredCoins = coins.filter(
    (item)=>
    item.name.toLowerCase().includes(search.toLowerCase())|| 
    item.symbol.toLowerCase().includes(search.toLowerCase()) );

  // useEffect-> runs whenever our page reload 
  useEffect(()=>{
    // fetch(
    //   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    //   );
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    .then((response)=>{
      //code for handling response
      console.log("Response >>",response);
      setCoins(response.data);
      setPaginatedCoins(response.data.slice(0,10));
      setLoading(false);
    }).catch((error)=>{
      //code for handling error
      console.log("Error >>",error);
      setLoading(false);
    });
  },[]);

  return (
    <>
     <Header/>
     <TopButton/>
    {loading ? (
      <Loader/>
    ) : (
    <div>
    
     <Search search={search} onSearchChange={onSearchChange}/>
     <TabsComponent coins={search ? filteredCoins : paginatedCoins}/>
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