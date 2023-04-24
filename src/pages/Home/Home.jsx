import React from 'react'
import './Home.scss'
import Main from '../../components/main/Main'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Main />
    </div>
  )
}

export default Home
