import { useEffect, useReducer } from 'react';
import axios from 'axios';
import Tile from './tile';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, products: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// component to render the list of products
const ListPage = () => {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: result.data?.productList[0]?.products, // assuming productList only has one products array, based on category.json
        });
      } catch (err: any) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((product: any) => (
            <Tile
              // only unique identifier found in products array data
              key={product['extended-size-group-id']}
              product={product}
            ></Tile>
          ))
        )}
      </div>
    </div>
  );
};

export default ListPage;
