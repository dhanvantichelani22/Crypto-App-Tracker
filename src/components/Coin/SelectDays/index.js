import React, { useState } from 'react';
import "./style.css"
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
    
    function SelectDays({days,handleDaysChange,noPTag}){
      // const [days, setDays] = useState(60);
    
      // const handleDaysChange = (event) => {
      //   setDays(event.target.value);
      // };
    
      return (
        <div className='select-days'>
          {!noPTag && <p className='changePrice'>Price Change In</p>}
            <Select
            sx={{
              height: "2.5rem",
              color: "gold",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--white)",
              },
              "& .MuiSvgIcon-root": {
                color: "var(--white)",
              },
              "&:hover": {
                "&& fieldset": {
                  borderColor: "#3a80e9",
                },
              },
            }}

              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={days}
              label="Days"
              onChange={handleDaysChange}>
                <MenuItem value={7}>7 Days</MenuItem>
              <MenuItem value={30}>30 Days</MenuItem>
              <MenuItem value={60}>60 Days</MenuItem>
              <MenuItem value={90}>90 Days</MenuItem>
              <MenuItem value={120}>120 Days</MenuItem>
              <MenuItem value={365}>1 Year</MenuItem>
            </Select>
        </div>
      );
    }

export default SelectDays;