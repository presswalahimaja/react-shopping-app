import data from '../../category';
import { useLocation, useParams } from 'react-router-dom';
import ColorSwatch from '../colors/color-swatch';
import { useState } from 'react';
const DetailPage = () => {
  const location = useLocation();
  const { colorCode } = location.state;

  const [selectedColorCode, setSelectedColorCode] = useState(colorCode);

  const params = useParams();
  const { productCode } = params;
  const product = data.productList[0].products.filter(
    (product) =>
      product.productCode === productCode &&
      product.tiles[0].toString() === colorCode.toString()
  )[0];

  const handleColorClick = (colorCode: string) => {
    setSelectedColorCode(colorCode);
  };

  return (
    <div className="product-detail">
      <div>
        <img
          src={`https://www.jcrew.com/s7-img-facade/${productCode}_${selectedColorCode}`}
          alt={product.productDescription}
        />
      </div>
      <div>
        <p className="product-badge">{product.badge?.label}</p>
        <p className="product-description">{product.productDescription}</p>
        <p className="product-code">Item {productCode}</p>
        <p className="product-price">{product.listPrice.formatted}</p>
        <p className="color-swatch-text">
          <span className="color-swatch-label">Color:</span>
          <span>{product.defaultColorCode}</span>
        </p>
        <div className="color-swatches-wrapper">
          {product.colors.map((color) => (
            <ColorSwatch
              key={color.colorCode}
              productCode={productCode}
              color={color}
              isSelected={
                // assuming tiles only has one color, based on category.json
                selectedColorCode.toString() === color.colorCode.toString()
                  ? true
                  : false
              }
              onColorClick={() => handleColorClick(color.colorCode)}
            ></ColorSwatch>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
