import './App.css'
import Nav from './components/nav/Nav'
import Coin from './components/coin/Coin'
import Rate from './components/rate/Rate'
import About from './components/about/About'
import CoinRoute from './components/route/CoinRoute'
import { BrowserRouter, Routes, Route } from 'react-router-dom'





function App() {


  return (
  
   <BrowserRouter>
  <Nav/>
  <Routes>
  <Route path='/' element={<Coin/>}/>
  {/* <Route path='/' element={<Rate/>}/> */}
  <Route path='/about' element={<About/>}/>
    <Route path='/coin/:id' element={<CoinRoute/>}/>
  </Routes>
  </BrowserRouter>
    
  )
}

export default App
