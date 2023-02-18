import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import logo from '../images/logo.jpg';

const ItemListContainer = () => {
  const { category } = useParams();
  console.log(category);

  const [itemCategory, setItemCategory] = useState([]);

  useEffect(() => {
    const filteredData = data.filter(item => item.category.toLowerCase() === category.toLowerCase());
    console.log(filteredData); // add console.log statement here
    setItemCategory(filteredData);
  }, [category]);

  return (
    <div className="container">
      {itemCategory.map(item => (
        <div key={item.id} className="card">
          <img src={logo} alt='Example image' />
          <h2>{item.name}</h2>
          <p>ID: {item.id}</p>
          <p>Category: {item.category}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;




