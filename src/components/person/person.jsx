import { useState } from "react";
import { person } from "../../data/data";
//import PersonTest from "../person-test/person-test";
import "./person-style.css";

const Person = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="person">
      <div className="header">
        <p className="title">My Customers</p>
        <input
          type="text"
          placeholder="Search by Customers name"
          className="input"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="cover">
        {/* <PersonTest search={search} /> */}
        {/* check filter */}

        {person
          .filter((item) => {
            return search.toLowerCase() === ""
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
    </div>
  );
};

export default Person;
