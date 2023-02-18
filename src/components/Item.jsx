import React, {useState} from 'react';
import data from '../data.json';
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';





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
                            <p>ID: {item.id}</p>
                            <p>Cstegory: {item.category}</p>
                            <p>${item.price}</p>
                            <button className="card-buy-btn"><Link to={`/item/${item.id}`}>Details</Link></button>                            
                            

                        </div>
                    
                        
                )
            }

            )

            
        }
    </div>
  )
}

export default Item


