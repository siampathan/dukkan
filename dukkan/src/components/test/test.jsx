import { products } from "../../data/data";
import "./test.css";

const Test = () => {
  return (
    <div>
      <div className="products">
        {products.map(
          ({
            id,
            imgUrl,
            item,
            price,
            timeStemp,
            className,
            statusCod,
            orderClass,
            status,
          }) => (
            <div className="card" key={id}>
              <div className="card-body">
                <div className="card__left">
                  <p className="order">
                    Order #<span className="id"> {id} </span>
                  </p>

                  <div className="card__container">
                    <img className="foodImg" src={imgUrl} alt="" />
                    <div className="quantity">
                      <p className="items">
                        <span className="item"> {item} </span>ITEM
                      </p>
                      <p className="price"> {price} </p>
                    </div>
                  </div>
                </div>
                <div className="card__right">
                  <p className="items"> {timeStemp} </p>
                  <p className={className}> {statusCod} </p>
                </div>
              </div>
              <span className="rule"></span>

              <div className="footer__status">
                <p>
                  <span className={`${orderClass} order__status`}>...</span>
                  {status}
                </p>

                <div>
                  <p className="check items">
                    Order In
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Test;
