import React from 'react';
import { useParams } from 'react-router-dom';
const DetailPage = () => {
  const params = useParams();
  const { productCode } = params;
  return <div>Detail: {productCode}</div>;
};
export default DetailPage;
