import { person } from "../../data/data";
import "./person-test-style.css";

const PersonTest = () => {
  return (
    <div>
      {person.map(({ id, short, firstName, lastName, orders }) => (
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
