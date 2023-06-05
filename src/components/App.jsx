import React, { useState } from "react";

const App = () => {
  const [item, setItem] = useState("");

  const [listItems, setListItems] = useState([]);

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleClick = () => {
    setListItems((prevItems) => [...prevItems, item]);
    setItem("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={item} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((listItem, index) => (
            <li key={index}>{listItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
