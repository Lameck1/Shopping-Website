import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux/products/products';
import ProductComponents from './productComponents';

const ProductListing = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="ui centered grid container">
      <ProductComponents
        products={products}
      />
    </div>
  );
};

export default ProductListing;
