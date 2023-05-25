import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Home Page JCREW</h1>
      <Link to="/products">List Products</Link>
    </div>
  );
}
export default LandingPage;
