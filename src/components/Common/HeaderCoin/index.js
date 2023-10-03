// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { CurrencyBitcoin } from '@mui/icons-material';

// // function HeaderCoin() {
// //   return (
// //     <div >
// //      <Select variant='outline'
// //      style={{width:100, height:40,marginleft:15,}}>
// //         <MenuItem value={'USD'}>USD</MenuItem>
// //         <MenuItem value={'INR'}>INR</MenuItem>
// //      </Select>
// //     </div>
// //   )
// // }

// function HeaderCoin() {
//   const [currencycoin, setCurrencyCoin] = useState("USD");
//   //  const {currency,setCurrency} = CryptoState();

//   // console.log(currency);
  
//   const handleChange = (event) => {
//     setCurrencyCoin(event.target.value);
//   };

//   return (
//     <div className=''>
      
//         {/* <InputLabel style={{color:"var(--mediumblue)",textAlign:"center"}}>Select</InputLabel> */}
//         <FormControl required>
//         <Select 
//         // color:"var(--pink)",backgroundColor:"#efef46",
//           sx={{width:100,height:35,marginRight:15,marginTop:12,}}
//           // onChange={(e) =>(handleChange)}
//           value={currencycoin} 
//         >
          
//           {/* value={'USD'} */}
//           {/* <MenuItem defaultValue={Select} style={{color:"var(--red)"}}>Select</MenuItem> */}
//           <MenuItem >USD</MenuItem>
//           <MenuItem >INR</MenuItem>
//         </Select>
//         </FormControl>
//     </div>
//   );
// }
// export default HeaderCoin;

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width:100,height:50,backgroundColor:"var(--gold)",color:"var(--red)"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"INR"}>INR</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}