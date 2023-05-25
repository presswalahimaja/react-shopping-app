import React from 'react';
import data from '../../category';
import { useParams } from 'react-router-dom';
import ColorSwatch from '../colors/color-swatch';
const DetailPage = () => {
  const params = useParams();
  const { productInfo = '' } = params;
  const [productCode, colorCode] = productInfo.split('-');
  const product = data.productList[0].products.filter(
    (product) => product.productCode === productCode
  )[0];

  return (
    <div className="product-detail">
      <div>
        <img
          src={`https://www.jcrew.com/s7-img-facade/${product.productCode}_${colorCode}`}
          alt={product.productDescription}
        />
      </div>
      <div>
        <p className="product-badge">{product.badge?.label}</p>
        <p className="product-description">{product.productDescription}</p>
        <p className="product-code">Item {product.productCode}</p>
        <p className="product-price">{product.listPrice.formatted}</p>
        <p className="color-swatch-text">
          <span className="color-swatch-label">Color:</span>
          <span>{product.defaultColorCode}</span>
        </p>
        <div className="color-swatches-wrapper">
          {product.colors.map((color) => (
            <ColorSwatch
              key={color.colorCode}
              productCode={product.productCode}
              color={color}
              isSelected={
                // assuming tiles only has one color, based on category.json
                colorCode === color.colorCode.toString() ? true : false
              }
            ></ColorSwatch>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
