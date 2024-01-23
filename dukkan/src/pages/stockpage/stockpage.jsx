import SwitchButton from "../../components/switchbutton/switchbutton";
import { products } from "../../data/data";
import "./stockpage-style.css";

const StockPage = () => {
  return (
    <>
      {products.map((items) => (
        <div key={items.id} className="card">
          <div className="card-body">
            <div className="stock__wrap">
              <div className="stock__left">
                <img src={items.imgUrl} alt="" />
                <div className="stock__content">
                  <p className="title"> {items.title} </p>
                  <p className="unit term">
                    {items.item} <span> Unit </span>
                  </p>
                  <p className="price term"> {items.price} </p>
                  <p className="avail term">In stock</p>
                </div>
              </div>
              <div className="stock__right">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-three-dots-vertical"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  </svg>
                </span>
                <p>
                  <SwitchButton />
                </p>
              </div>
            </div>
            <hr />
            <p className="share">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-share"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                </svg>
              </span>
              Share Product
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default StockPage;
