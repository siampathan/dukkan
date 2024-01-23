import Header from "../header/header";
import Test from "../test/test";
import "./home-style.css";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="feed">
        <div className="feed__header">
          <p>Overview</p>
          <p className="time__shedual">
            Last week
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
          </p>
        </div>

        {/* order status */}
        <div className="feed__container">
          <div className="feed__container__item">
            <p className="title">Orders</p>
            <p className="quantity">33</p>
          </div>

          <div className="feed__container__item">
            <p className="title">total sales</p>
            <p className="quantity price">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-currency-rupee"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                </svg>
              </span>
              2,918
            </p>
          </div>

          <div className="feed__container__item">
            <p className="title">store views</p>
            <p className="quantity">301</p>
          </div>

          <div className="feed__container__item">
            <p className="title">product views</p>
            <p className="quantity">19,121</p>
          </div>
        </div>

        {/* active Order status */}
        <div className="active__order">
          <p>Active Orders</p>
          <p className="time__shedual">
            View All
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

        <div className="request__status ">
          <ul>
            <li>Pending(131)</li>
            <li>Accepted(79)</li>
            <li>Shipped(27)</li>
          </ul>
        </div>
      </div>

      <div className="products__status">
        <Test />
        {/* <p>Test scroll</p> */}
      </div>
    </div>
  );
};

export default Home;
