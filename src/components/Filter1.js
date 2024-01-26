import React, { useEffect, useState } from "react";
import axios from "axios";
const Filter1 = (props) => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const resp = await axios.get("http://localhost:3300/users");
    // setColumns(Object.keys(resp.data[0]));
    setData(resp.data);
  }
  function applyFilter(){
    const resp = data.filter((e)=>e.name.toLowerCase()===input.toLowerCase());
    setData(resp);
  }
  // function resetButton(){
  //   setInput("");
  // }
  return (
    <>
      <div>
        <input
          type="text"
          name="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search"
        ></input>
        <button type="submit" onClick ={applyFilter} className="btn btn-outline-primary btn-sm">Search</button>
      </div>
      {data.map((e, i) => {
        return <p key={i}>{e.name}</p>;
      })}
    </>
  );
};

export default Filter1;
