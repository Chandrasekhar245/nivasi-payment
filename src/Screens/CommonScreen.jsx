import React,{useEffect,useState} from 'react'
import './Styles.css'
import logo from '../assets/logo.png'
import PaymentScreen from './PaymentScreen'
import PaymentSuccessScreen from './PaymentSuccessScreen'
import { fetchOwnerDetails } from '../Services'

const CommonScreen = () => {

  const [ownerData,setOwnerData] = useState({
    subscriptionLabel: "Nivaasi app subscription charges starting from 12-February-2025 to 11-March-2025",
    totalBeds: 1,
    perBedCharges: 1000,
    monthsOpted: 6,
    tax: 180,
    totalAmountToBePaid: 7080,
    paymentSessionId: "5082000000041017",
    name: "Vinod",
    email: "vinod@nivaasi.com",
    currency: "INR",
    cSymbol: "₹",
    business: "NIVAASI"
  }
  )
  const data = {
    code:"6NC8euwT1L",
    subDuration:"6"
}

const onSuccess = (response)=>{
console.log("Checking response",response)
if(response?.status === 200){
  setOwnerData(response?.data)
}else{
  setOwnerData({})
}
}

const onFailure = (error)=>{
  console.log("Checking error",error)
  // setOwnerData({})
}

  useEffect(()=>{
    fetchOwnerDetails(data,onSuccess,onFailure)
  },[])

  return (
    <div className='common-container'>
        <div className='header-container'>
            <img src={logo} height={50}/>
            <div className='header-text-container'>
                <p className='small-text-style header-text-style'>Paying for</p>
                <h5 className='big-text-style header-text-style'>NIVAASI PREMIUM HOSTELS</h5>
            </div>
        </div>
        <div className='sub-text-container'>
            <p className='sub-text-text-style'>{ownerData?.subscriptionLabel}</p>
        </div>
        {/* <PaymentSuccessScreen/> */}
        <PaymentScreen ownerData = {ownerData}/>
    </div>
  )
}

export default CommonScreen