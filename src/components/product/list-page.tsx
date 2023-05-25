import { Link } from 'react-router-dom';
import data from '../../category.js';
const ListPage = () => {
  return (
    <div>
      <h1> Women’s T-shirts & Tank Tops </h1>
      <div className="products">
        {data.productList[0].products.map((product) => (
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
        ))}
      </div>
    </div>
  );
};

export default ListPage;
