import "./account-style.css";

const Account = () => {
  return (
    <div className="account">
      <form className="form">
        <div className="group">
          <label className="label">Phone Number</label>
          <input
            type="text"
            className="number"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="group">
          <label className="label">Password</label>
          <input
            type="password"
            className="number"
            placeholder="Enter your password"
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>

        {/* <div class="form-group">
          <label for="exampleInputEmail1" className="label">Phone Number</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter your Phone Number"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1"  className="label">Password</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <input
            type="password"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter your Phone Number"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default Account;
