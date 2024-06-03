import './coin.css'
import coinIMG from '../../assets/coin-img.jpg'
import Rate from '../rate/Rate'

const Coin = () => {
  return (<>
    <header className='header'>
        <div className='container' id='container'>
        <div className="body-right">
        <h2>BLOCK CHAIN WEBSITE</h2>
     <span>A PLATFORM WHERE <br /> YOU CAN TRADE <br />ALL COINS</span>
      </div>
         <div className="body-left">
          <img src={coinIMG} alt="alt" />
         </div>
         </div>
    </header>
    <Rate/>
    </>
  )
}

export default Coin
