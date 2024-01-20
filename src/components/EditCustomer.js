import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

const EditCustomer = () => {
  const { id } = useParams();
  const nagivate = useNavigate();
  const [data, setData] = useState([]);

//   const handleChange = (event) => {
//     console.log(event.target.name);
//   };
  useEffect(() => {
    axios
      .get("http://localhost:3300/users/" + id)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.patch("http://localhost:3300/users/" + id, data).then((res) => {
      alert("Customer updated successfully");
      nagivate("/");
    });
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
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name..."
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter your email..."
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter Mobile number..."
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="address">Address</label>
          <textarea 
            name="address"
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter your address..."
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-sm">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditCustomer;
