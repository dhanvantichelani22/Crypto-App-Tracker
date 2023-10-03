import React,{useState} from 'react';

import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
import "./style.css"

function PaginationComponent({pageNumber,handlePageChange}) {
  // const [page, setPage]= useState(1);
  
  // const handleChange = (event, value) => {
  //   setPage(value);
  // };

  return (
    <div className='pagination-div'>
      {/* <Typography>Page: {page}</Typography> */}
      <Pagination count={10} 
      page={pageNumber} 
      onChange={handlePageChange}
      sx={{
        color: "var(--gold)",
        "& .Mui-selected ": {
          backgroundColor: "var(--pink)!important",
          color:"white !important",
          borderColor: "var(--pink)!important ",
        },
        "& .MuiPaginationItem-ellipsis": {
          border: "0px solid var(--gold) !important",
        },
        "& .MuiPaginationItem-text": {
          color: "var(--gold)",
          border: "2px solid var(--pink)",
        },
      }} />
      </div>
  );
}
export default PaginationComponent;