import { Link } from 'react-router-dom';

const Tile = (props: any) => {
  const { product } = props;
  return (
    <div>
      <div key={product['extended-size-group-id']} className="product">
        <Link to={`/products/${product.productCode}`}>
          <img
            src={`https://www.jcrew.com/s7-img-facade/${product.productCode}_${product.defaultColorCode}`}
            alt={product.productDescription}
          />
        </Link>
        <div className="product-info">
          <p className="product-badge">{product.badge?.label}</p>
          <Link to={`/products/${product.productCode}`}>
            <p>{product.productDescription}</p>
          </Link>
          <p>{product.listPrice.formatted}</p>
        </div>
      </div>
    </div>
  );
};
export default Tile;
