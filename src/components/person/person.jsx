//import PersonPage from "../../pages/personpage/personpage";
import PersonTest from "../person-test/person-test";
import "./person-style.css";

const Person = () => {
  return (
    <div className="person">
      <div className="header">
        <p className="title">My Customers</p>
        <input
          type="text"
          placeholder="Search by Customers name"
          className="input"
        />
      </div>

      <div className="cover">
        <PersonTest />
      </div>
    </div>
  );
};

export default Person;
