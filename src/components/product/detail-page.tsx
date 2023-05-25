import React from 'react';
import data from '../../category';
import { useParams } from 'react-router-dom';
const DetailPage = () => {
  const params = useParams();
  const { productCode } = params;
  const product = data.productList[0].products.filter(
    (product) => product.productCode === productCode
  )[0];
  return (
    <div className="product-detail">
      <div>
        <img
          src={`https://www.jcrew.com/s7-img-facade/${product.productCode}_${product.defaultColorCode}`}
          alt={product.productDescription}
        />
      </div>
      <div>
        <p className="product-badge">{product.badge?.label}</p>
        <p className="product-description">{product.productDescription}</p>
        <p className="product-code">Item {product.productCode}</p>
        <p className="product-price">{product.listPrice.formatted}</p>
      </div>
    </div>
  );
};
export default DetailPage;
