import React from 'react'

export const convertDate = (number) => {
    var myDate = new Date(number);
    // Jan start from 0 and we are calculating from feb 
    return myDate.getDate() +"/" + (myDate.getMonth()+1); 
}

// export default convertDate;