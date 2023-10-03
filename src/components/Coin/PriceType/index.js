import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./style.css";

export default function TogglePriceType({priceType,handlePriceTypeChange}) {
  // const [priceType, setPriceType] = useState('prices');

  // const handlePriceTypeChange = (event,newType) => {
  //   setPriceType(newType);
  //   console.log(newType);
  // };

  return (
    <div className='toggle-prices'>
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      sx={{
          "& .Mui-selected": {
            color: "var(--gold) !important",
          },
          // borderColor: "var(--pink)",
          border: "unset !important",
          // border: "1px solid var(--pink)",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid var(--gold)!important",
            color: "#000",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--green) !important",
            backgroundColor:"var(--mediumblue)",
          },
        }}>
      <ToggleButton value="prices" className='toggle-btn'>Price</ToggleButton>
      <ToggleButton value="market_caps" className='toggle-btn'>Market Cap</ToggleButton>
      <ToggleButton value="total_volumes" className='toggle-btn'>Total Volume</ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}