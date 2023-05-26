import logo from '../images/jcrew-logo.svg';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <a href="/products">
          <img src={logo} alt="jcrew"></img>
        </a>
      </div>
      <div className="navbar-items">
        <a href="/products">
          <div className="navbar-item">Products</div>
        </a>
      </div>
    </header>
  );
};
export default Navbar;
