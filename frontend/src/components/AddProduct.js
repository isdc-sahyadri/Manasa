import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = ({ history }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [seller, setSeller] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    const { data } = await axios.post('/api/products', {
      name,
      description,
      price,
      seller,
    });

    if (data) {
      history.push('/');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Seller</label>
        <input
          type="text"
          value={seller}
          onChange={(e) => setSeller(e.target.value)}
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;