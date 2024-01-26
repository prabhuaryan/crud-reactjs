import React, { useState } from "react";
const Filter = (props) => {

const [input, setInput]=useState("");

const applyFilter=()=>{
  const res=props.data.filter((e)=>e.name.toLowerCase()==input.toLowerCase());
  console.log("Response ",res);
  console.log("Props.data",props.data);
}
  return (
    <>
      <input
        type="text"
        className="mb-2"
        placeholder="Search..."
        onChange={(e)=>setInput(e.target.value)}
        style={{
          outline: "none",
          padding: "5px",
          border: "none",
          borderRadius: "5px",
        }}
      ></input>
      <button
        type="submit"
        className="mt-2 search-button"
        onClick={()=>applyFilter()}
        style={{
          outline: "1px solid rgba(255, 125, 255, 0.7)",
          padding: "5px",
          border: "none",
          borderRadius: "5px",
          marginLeft: "5px",
        }}
      >
        Search
      </button>
    </>
  );
};

export default Filter;
