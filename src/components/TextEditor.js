import { useState } from "react";

export const TextEditor = () => {
  const [message, setMessage] = useState("");

  return (
    
    <div className="container">
      <h1>Welcome to TextEditor App</h1>

      <textarea
        cols={150}
        rows={15}
        className="mt-2"
        placeholder="Please write sentence to convert"
      ></textarea>

      <div className="buttons">
        <button className="btn btn-primary">UpperCase</button>
        <button className="btn btn-primary">LowerCase</button>
      </div>
    </div>
  );
};

export default TextEditor;
