import React from 'react'

const PaymentScreen = ({ownerData = {}}) => {
  return (
    <div className='payment-screen-container'>
      <div className='pricing-information-container'>
      <p className='pricing-information-text'>Pricing Information</p>
      <table className="pricing-table">
        <tbody>
          <tr><td>Number of Beds</td><td className="bold-text">{ownerData?.totalBeds}</td></tr>
          <tr><td>Per Bed Charge</td><td className="bold-text">Rs. {ownerData?.perBedCharges}/-</td></tr>
          <tr><td>Number Of Months</td><td className="bold-text">{ownerData?.monthsOpted}</td></tr>
          <tr><td>GST Charges</td><td className="bold-text">Rs. {ownerData?.tax}/-</td></tr>
          <tr><td>Total Amount</td><td className="bold-text">Rs. {ownerData?.totalAmountToBePaid}/-</td></tr>
        </tbody>
      </table>
      </div>
      <div>
      <button className='button-container'>Pay Securely ₹ {ownerData?.totalAmountToBePaid}/-</button>
      <p className='payment-hint-text'>Upon successful payment your subscription will automatically renews. Late payment may lead to account suspension</p>
      </div>
    </div>
  )
}

export default PaymentScreen

