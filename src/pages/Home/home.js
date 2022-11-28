import React from 'react'
import Navbar from '../../Componets/navbar'
import Header from '../../Componets/header'
import Footer from '../../Componets/Footer'
import  CssStyle from './Home.css'
import background from './3kf5.gif'
const Home = () => {
  const eximage= './3kf5.gif'
  return (
    <div className='Homes'>
      <div className='Navi'>
      <Navbar/>
      <Header/>
      
        </div>
      <Footer/>
    </div>
  )
}

export default Home
