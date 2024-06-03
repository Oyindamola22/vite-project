import React, { useEffect, useState } from 'react'
import './rate.css'
import axios from 'axios'
import RateItem from './RateItem'
import { Link } from 'react-router-dom'

const Rate = () => {
  const [coins, setCoins] = useState([])

useEffect(() =>{
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
  .then((response) => {
   console.log(response.data);
    setCoins(response.data)
    
  }).catch ((error) =>{
    console.log(error);
  })
},[])
  return (
    <div className='container'>
        <h1>Authorized Coins With current rate</h1>
        <div className="heading">
        <p> #</p>
            <p className='coin-name'>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className='hide-mobile'>Volume</p>
            <p className='hide-mobile'>Mkt Cap</p>
        </div>
        {
          coins.map(({market_cap_rank,image,market_cap,current_price,symbol,total_volume,market_cap_change_percentage_24h,id },key)=>
            <Link to={`/coin/${id}`} style={{textDecoration:"none"}}>
          <RateItem key={key} market_cap_rank={market_cap_rank} image={image} name={name} market_cap={market_cap} current_price={current_price} total_volume={total_volume} symbol={symbol}  market_cap_change_percentage_24h={market_cap_change_percentage_24h }/>
          </Link>
          )
     
        }
    </div>
  )
}
 
export default Rate
