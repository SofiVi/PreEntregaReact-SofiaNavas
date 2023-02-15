import React, {useState} from 'react';
import data from '../data.json';
import logo from '../images/logo.jpg';





const Item = () => {
    const [item, setItem] = useState (data);
    

  return (
    <div className="container"> 
        {
            item.map(item => {
                return(
                    
                        <div  key = {item.id} className="card">
                            <img src={logo} alt='Example image' borderRadius='lg' />
                            <h2>{item.name}</h2>
                            <p>${item.price}</p>
                            <button className="card-buy-btn">Buy</button>                            
                            

                        </div>
                    
                        
                )
            }

            )

            
        }
    </div>
  )
}

export default Item


