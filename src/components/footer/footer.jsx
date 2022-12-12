import { Link } from "react-router-dom";
import "./footerstyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__items">
        <Link to="/" className="item">
          <p>Home</p>
        </Link>
        <Link className="item" to="/products">
          <p>Orders</p>
        </Link>
        <Link className="item" to="/stock">
          <p>Products</p>
        </Link>
        <Link className="item" to="/person">
          <p>Manages</p>
        </Link>
        <Link className="item" to="/account">
          <p>Account</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
