import { person } from "../../data/data";
import "./personpage-style.css";

const PersonPage = () => {
  return (
    <>
      {person.map(({ id, short, firstName, lastName, orders }) => (
        <div className="wrap" key={id}>
          <div className="card">
            <div className="card-body">
              <p className="short__name"> {short} </p>
              <div className="wrap">
                <p className="full__name"> {`${firstName} ${lastName}`} </p>
                <p className="order">
                  {orders} <span> Orders </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonPage;
