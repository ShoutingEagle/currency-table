
import './App.css';
import RenderUI from './Components/RenderUI';
import Spinner from './Components/Spinner';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData] = useState({
    loading : true,
    currencyData : [],
    error : ''
  })

  
      async function fetchData () { 
        try {
              const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
              const data = await response.json()
              setData({
                loading : false,
                currencyData : data,
                error : ''
              })
            } 
          catch (error) {
              setData({
                loading : false,
                currencyData : [],
                error : error.message
              })
          }
      }
    
   
    
    




  useEffect(() => {
    setTimeout(() => {
      fetchData();
    },2000)
  },[])



  return (
    <div className="App">

      {data.loading?(<Spinner/>):(<RenderUI data={data}/>)}
      
    </div>
  );
}

export default App;
