import React from 'react'

function RenderUI({data}) {
    const currencyData = data.currencyData;
    console.log(currencyData);
  return (
    <div className='currencyTable'>
        <div className='heading'>Currency Table</div>
        <div className='table'>
            <div className='table-row heading-row'>               
                <div>Name</div>
                <div>Symbol</div>         
                <div>Price</div>      
                <div>Total Volume</div>
                
                <div>Price Change %</div>
                <div>Market Cap</div>
            </div>
            {currencyData.map((item) => (
                <div key={item.id} className='table-row'>
                    <div className='image'>
                      <div><img src={item.image} alt='img' /></div>
                      <div>{item.name}</div>
                    </div>                    
                    <div>{(item.symbol).toUpperCase()}</div>    
                    <div>$ {item.current_price}</div>               
                    <div>{item.total_volume}</div>
                    
                    <div className={item.price_change_percentage_24h>0?'green':'red'}>{(item.price_change_percentage_24h).toFixed(2)}%</div>
                    <div>{item.market_cap}</div>
                </div>
            ))}
        </div>
    </div>
)
}

export default RenderUI


