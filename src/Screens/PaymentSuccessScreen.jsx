import React from 'react'
import success from '../assets/success.png'
const PaymentSuccessScreen = () => {
  return (
    <div className='payment-success-screen-container'>
        <img src={success} height={200} width = {200}/>
        <p className='payment-id-text'>Payment ID : 45874578457847</p>
        <div className='border-under-line'>
        </div>
        <p className='payment-id-text payment-id-text-margin'>Next Due Date : 04th March 2025</p>
        <h2 className='payment-successful-message'>PAYMENT SUCCESSFUL</h2>
        <p className='thanks-message'>Your subscription will be renewed automatically. Thanks for the payment. Have a good day :)</p>
    </div>
  )
}

export default PaymentSuccessScreen