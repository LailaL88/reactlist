import React from "react";

function App() {

  const[inputValue, setInputValue] = React.useState("");
  const [listItems, setItems] = React.useState([]);

  function handleChange(event) {
      setInputValue(event.target.value);
  }

  function handleClick() {
    setItems(prev => {
      return [...prev, inputValue];
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {listItems.map(function (liItem) {
          if (liItem != "") {
          return <li>{liItem} </li>;}})}
        </ul>
      </div>
    </div>
  );
}

export default App;
