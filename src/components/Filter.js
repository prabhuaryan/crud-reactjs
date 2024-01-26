import React, { useState } from "react";

const Filter = (props) => {
  const [input, setInput] = useState("");
  const {data,setData}=props;
  const applyFilter = () => {
    if (input === "") {
      setData(data);
      return;
    }
    const filterBySearch = data.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setData(filterBySearch);
  };
  const reset = () => {
    setInput(" ");
    setData(data);
    console.log("Set data",data);
  };
  return (
    <>
      <input
        type="text"
        className="mb-2"
        placeholder="Search..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
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
        onClick={applyFilter}
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
      <button
        type="submit"
        className="mt-2 search-button"
        onClick={reset}
        style={{
          outline: "1px solid rgba(255, 125, 255, 0.7)",
          padding: "5px",
          border: "none",
          borderRadius: "5px",
          marginLeft: "5px",
        }}
      >
        Reset
      </button>
    </>
  );
};

export default Filter;
