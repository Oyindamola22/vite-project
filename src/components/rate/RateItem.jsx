import './rate.css'

const RateItem = ({market_cap_rank,image,market_cap,current_price,symbol,total_volume,
    market_cap_change_percentage_24h
    }) => {
  return (
    <div className="coin-row">
    <p>{market_cap_rank}</p>
    <div className='img-symbol'>
            <img src={image}/>
            <p>{symbol .toUpperCase()}</p>

        </div>
        <p>${current_price.toLocaleString()}</p>
        <p>{market_cap_change_percentage_24h.toFixed(2      )}%</p>
        <p>${total_volume.toLocaleString()}</p>
        <p>${market_cap.toLocaleString()}</p>
    </div>
  )
}

export default RateItem
