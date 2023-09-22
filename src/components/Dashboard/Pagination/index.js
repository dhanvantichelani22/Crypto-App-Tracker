import React,{useState} from 'react';

import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
import "./style.css"

export default function PaginationComponent() {
  const [page, setPage]= useState(1);
  
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className='pagination-div'>
      {/* <Typography>Page: {page}</Typography> */}
      <Pagination count={10} page={page} onChange={(event, value)=>handleChange(event, value)}
      sx={{
        color: "var(--white)",
        "& .Mui-selected ": {
          backgroundColor: "var(--gold) !important",
          color:"#FF0000  !important",
          borderColor: "var(--pink)!important ",
        },
        "& .MuiPaginationItem-ellipsis": {
          border: "0px solid var(--grey) !important",
        },
        "& .MuiPaginationItem-text": {
          color: "var(--white)",
          border: "1px solid var(--grey)",
        },
      }} />
      </div>
  );
}