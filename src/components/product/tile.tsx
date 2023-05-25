import { Link } from 'react-router-dom';
import ColorSwatch from '../colors/color-swatch';

const Tile = (props: any) => {
  const { product } = props;
  const selectedColorCode = product.tiles[0].toString()
    ? product.tiles[0].toString()
    : product.defaultColorCode;
  return (
    <div>
      <div key={product['extended-size-group-id']} className="product">
        <Link to={`/products/${product.productCode + '-' + selectedColorCode}`}>
          <img
            src={`https://www.jcrew.com/s7-img-facade/${product.productCode}_${selectedColorCode}`}
            alt={product.productDescription}
          />
        </Link>
        <div className="product-info">
          {/* <p className="product-badge">{product.badge?.label}</p> */}
          <Link to={`/products/${product.productCode}`}>
            <p>{product.productDescription}</p>
          </Link>
          <p className="product-price">{product.listPrice.formatted}</p>
          <div className="color-swatches-wrapper">
            {product.colors.map((color: any) => (
              <ColorSwatch
                key={color.colorCode}
                productCode={product.productCode}
                color={color}
                isSelected={
                  // assuming tiles only has one color, based on category.json
                  product.tiles[0].toString() === color.colorCode.toString()
                    ? true
                    : false
                }
              ></ColorSwatch>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tile;
