import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const CustomerList = () => {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await axios.get("http://localhost:3300/users");
    setColumns(Object.keys(resp.data[0]));
    setData(resp.data);
  };
  const deletCustomer = async (id) => {
    const resp = await axios.delete("http://localhost:3300/users/" + id);
    console.log(resp);
    navigate("/");
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center m-3">Customer Management Application</h1>
      <div className="text-start mb-2">
        <Link className="btn btn-outline-success btn-sm" to="/create">
          Create New Customer
        </Link>
      </div>
      <table className="table table-bordered text-center table-hover table-dark">
        <thead>
          <tr>
            {columns?.map((c, i) => {
              return <th key={i}>{c?.charAt(0).toUpperCase() + c.slice(1)}</th>;
            })}
            {columns.length ? (
              <th colSpan={2} className="text-center">
                Actions
              </th>
            ) : (
              <Link className="btn btn-outline-success btn-sm" to="/create">
                Create New Customer
              </Link>
            )}
          </tr>
        </thead>
        <tbody>
          {data?.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.address}</td>
                <td className="text-center">
                  <Link
                    to={`/update/${e.id}`}
                    className="btn btn-outline-info btn-sm"
                    style={{ textDecoration: "none" }}
                  >
                    Update
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => deletCustomer(e.id)}
                  >
                    <Link
                      to={`/delete/${e.id}`}
                      style={{ textDecoration: "none", color:"white" }}
                    >
                      Delete
                    </Link>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
