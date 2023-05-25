import { Link } from 'react-router-dom';
import ColorSwatch from '../colors/color-swatch';
import { useState } from 'react';

const Tile = (props: any) => {
  const { product } = props;
  const initSelectedColorCode = product.tiles[0].toString()
    ? product.tiles[0].toString()
    : product.defaultColorCode;
  const productCode = product.productCode;
  const [selectedColorCode, setSelectedColorCode] = useState(
    initSelectedColorCode
  );
  const handleColorClick = (colorCode: string) => {
    setSelectedColorCode(colorCode);
  };
  return (
    <div>
      <div key={product['extended-size-group-id']} className="product">
        <Link
          to={`/products/${productCode}`}
          state={{ colorCode: selectedColorCode, product }}
        >
          <img
            src={`https://www.jcrew.com/s7-img-facade/${productCode}_${selectedColorCode}`}
            alt={product.productDescription}
          />
        </Link>
        <div className="product-info">
          {/* <p className="product-badge">{product.badge?.label}</p> */}
          <Link
            to={`/products/${productCode}`}
            state={{ colorCode: selectedColorCode }}
          >
            <p>{product.productDescription}</p>
          </Link>
          <p className="product-price">{product.listPrice.formatted}</p>
          <div className="color-swatches-wrapper">
            {product.colors.map((color: any) => (
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
    </div>
  );
};
export default Tile;
