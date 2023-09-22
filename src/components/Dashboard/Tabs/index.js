// npm i @mui/lab
// https://mui.com/material-ui/react-tabs/
import React, { useState } from 'react';
// import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import List from '../List';
import Grid from "../Grid";
import { createTheme, ThemeProvider } from '@mui/material';
// import "./styles.css";

export default function TabsComponent({coins}) {
  // useState('1') => tab 1 then useState is 1 or 2 then useState is 2(value="grid" or value="list" )
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Theme color 
  const theme = createTheme({
    palette:{
      primary:{
        main:"#FFD700",
      },
    },
  });

  // background color
  const style = {
    color:"var(--pink)",
    width:"50vw",
    fontSize:"1.2rem",
    fontWeight:600,
    fontFamily:"Inter",
    textTransform:"uppercase",
  };

  return (
  //  <div style={{backgroundColor:"var(--white)"}}>
      <ThemeProvider theme = {theme}>
      <TabContext value={value}>
        {/* for full width of tab ->variant="fullWidth" */}
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style} />
          </TabList>
        
        <TabPanel value="grid">
          <div className='grid-flex'>
            {coins.map((coin,i)=>{
              return <Grid coin={coin} key={i}/>;
                // <div key={i}>
                //   <img src={coin.image}/>
                // <p>
                //   {i+1}.{coin.name}
                // </p>
                // </div>
            })}
          </div>
        </TabPanel>

        {/* List part */}
        <TabPanel value="list">
        <table className='list-table'>
            {coins.map((item,i)=>{
              return(
                <List coin={item} key={i}/>
              )
            })}
          </table>
          </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}