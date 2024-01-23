import { getSearchParamsForLocation } from "react-router-dom/dist/dom";
//import { person } from "../../data/data";
import "./person-test-style.css";

const PersonTest = ({ search }) => {
  return (
    <div>
      {person
        .filter((item) => {
          return getSearchParamsForLocation.toLowerCase() === ""
            ? item
            : item.firstName.toLowerCase().includes(search);
        })
        .map(({ id, short, firstName, lastName, orders }) => (
          <div className="div__" key={id}>
            <div className="card">
              <div className="card-body">
                <div className="persondesc">
                  <p className="short"> {short} </p>

                  <div className="personrec">
                    <p className="fullName"> {`${firstName} ${lastName}`} </p>
                    <p className="order">
                      {orders} <span> orders </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PersonTest;
