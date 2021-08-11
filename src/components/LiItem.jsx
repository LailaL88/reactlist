import React from 'react';

function LiItem(props) {
  const haslineThrough = {textDecoration: 'line-through'};
  const noLineThrough = {textDecoration: 'none'};
  const [lineThrough, setLineThrough] = React.useState(false);
  function addLineThrough() {
    setLineThrough(lineThrough ? false : true);
  }
  return <div className="listItem">
      <li style={lineThrough ? haslineThrough : noLineThrough} onClick={addLineThrough}>{props.text}</li>
      <span className="closeBtn" onClick={ () => props.deleteItem(props.id)}>X</span>
      </div>;
}

export default LiItem;