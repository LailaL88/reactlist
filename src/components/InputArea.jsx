import React from 'react';

function InputArea(props) {
    return (
    <div className="form">
        <input onChange={props.changed} type="text" />
        <button onClick={props.clicked}>
            <span>Add</span>
        </button>
    </div>
    );
}

export default InputArea;