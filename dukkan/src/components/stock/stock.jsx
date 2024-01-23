import StockPage from "../../pages/stockpage/stockpage";
import "./stock-style.css";

const Stock = () => {
  return (
    <div className="stock">
      <div className="header">
        <p className="title">Cataloge</p>
        <div className="sub__title">
          <p>Products</p>
          <p>Categories</p>
        </div>
      </div>
      <StockPage />
    </div>
  );
};

export default Stock;
