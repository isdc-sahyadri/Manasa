import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    };

    fetchProduct();
  }, [match.params.id]);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>Seller: {product.seller?.name}</p>
    </div>
  );
};

export default ProductDetail;