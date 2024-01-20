import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const CustomerForm = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // const handleChange = (e) => {
  //   console.log(e);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputData.name === "" ||
      inputData.email === "" ||
      inputData.address === "" ||
      inputData.phone === ""
    ) {
      alert("Please provide a value");
    } else {
      axios
        .post("http://localhost:3300/users", inputData)
        .then((res) => {
          alert("Customer added successfully");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="container mt-5 w-50">
      <div className="text-start mb-2">
        <Link className="btn btn-outline-primary btn-sm" to="/">
          Back
        </Link>
      </div>
      <form method="post" onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name..."
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter your email..."
            onChange={(e) =>
              setInputData({ ...inputData, email: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label for="phone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter Mobile number..."
            onChange={(e) =>
              setInputData({ ...inputData, phone: e.target.value })
            }
          />
        </div>
        <div className="form-group mb-2">
          <label for="address">Address</label>
          <textarea
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter your address..."
            onChange={(e) =>
              setInputData({ ...inputData, address: e.target.value })
            }
          ></textarea>
        </div>
        <button type="submit" className="btn btn-outline-success btn-sm">
          Add Customer
        </button>
      </form>
    </div>
  );
};
export default CustomerForm;
