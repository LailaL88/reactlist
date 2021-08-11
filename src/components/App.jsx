import React from "react";
import LiItem from './LiItem';
import InputArea from "./InputArea";
import '../styles/styles.scss';

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

  function deleteToDo(id) {
    setItems(prev => {
      return prev.filter((li, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea clicked={handleClick} changed={handleChange}/>
      <div>
        <ul>
        {listItems.map(function (liItem, index) { 
         return  liItem !== "" ? <LiItem key={index} id={index} text={liItem} deleteItem={deleteToDo}/> : null })}
        </ul>
      </div>
    </div>
  );
}

export default App;
