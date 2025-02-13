import React from 'react'
import './App.css'
import PaymentScreen from './Screens/PaymentScreen'
import FooterBanner from './Screens/FooterBanner'
import CommonScreen from './Screens/CommonScreen'

const App = () => {
  return (
    <div className='main-container'>
      <CommonScreen/>
      <FooterBanner/>
    </div>
  )
}

export default App