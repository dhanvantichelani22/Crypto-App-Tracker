import React from 'react'
import "./style.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { convertNumbers } from '../../../functions/convertNumbers';
import { Link } from 'react-router-dom';
function List({coin}) {
  return ( 
    <Link to={`/coin/${coin.id}`}>
    <tr className='list-row'>
      <Tooltip title="Coin logo">
        <td className="td-image">
        <img src={coin.image} className='coin-logo'/>
        </td></Tooltip>
        <Tooltip title="Coin Info">
        <td>
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
        </td>
        </Tooltip>

        {/* placement="right-start" for tooltip position */}

        <Tooltip title="Price change in 24Hrs" placement="bottom-start">

        {/* green - greater than zero */}

        {coin.price_change_percentage_24h> 0 ?(
        <td className='chip-flex'>
      <div className='price-chip'>
        {coin.price_change_percentage_24h.toFixed(2)}%</div>
        <div className='icon-chip td-icon'>
        <TrendingUpRoundedIcon/>
        </div>
      </td>):( 
        // negative-red
      <td className='chip-flex'>
      <div className='price-chip chip-red'>
        {coin.price_change_percentage_24h.toFixed(2)}%</div>
        <div className='icon-chip-red td-icon'>
        <TrendingDownRoundedIcon/>
        </div>
      </td>)}
      {/* <div className='info-container'> instead of it td block*/} 
      </Tooltip>
      <Tooltip title="Current Price" >
      <td>
      <h3 className='coin-price td-center-align' style={{color:
          coin.price_change_percentage_24h < 0
           ? "var(--red)"
           :"var(--green)",}}>
            ${coin.current_price.toLocaleString()}</h3>
      </td>
      </Tooltip>
      <Tooltip title="Total Volume" placement="bottom-end">
      <td>
          <p className="totalvolume td-right-align td-total-volume">
            ${coin.total_volume.toLocaleString()}
          </p></td>
          </Tooltip>
          <Tooltip title="Market Cap" placement="bottom-end">
          <td className='desktop-td-market'>
            <p className="totalvolume td-right-align">
            ${coin.market_cap.toLocaleString()}
          </p>
          </td>
          </Tooltip>
          <Tooltip title="Market Cap" placement="bottom-end">
          <td className='mobile-td-market'>
            <p className="totalvolume td-right-align">
            ${convertNumbers(coin.market_cap)}
          </p>
          </td>
          </Tooltip>
    </tr>
    </Link>
  )
}

export default List;