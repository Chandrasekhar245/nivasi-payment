export async function fetchOwnerDetails(data = {}, onSuccess = () => {}, onFailure = () => {}) {
    try {
      const response = await fetch('https://shareinfotech.com/nivaasi/mobile/fetchOwnerSubPaymentDetails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      onSuccess(result); 
      return result;
    } catch (error) {
      onFailure(error);
      console.error('Error:', error);
      throw error;
    }
  }
  
  