import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Data from "../data.json";
import logo from '../images/logo.jpg';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    console.log(id);
    const item = Data.find((item) => item.id === Number(id));
    console.log(item); // add console.log statement here
    setSelectedItem(item);
  }, [id]);

  if (!selectedItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-detail-container">
      <img src={logo} alt='Example image' borderRadius='lg' />
      <h2>{selectedItem.name}</h2>
      <p>ID: {selectedItem.id}</p>
      <p>Category: ${selectedItem.category}</p>
      <p>Price: ${selectedItem.price}</p>
    </div>
  );
};

export default ItemDetailContainer;