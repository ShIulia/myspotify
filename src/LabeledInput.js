import React from 'react';
import "./LabeledInput.css";

function LabeledInput(props) { 
    function handleClick(e) {
        console.log('The link was clicked.');
      }
    return <div className="labels" onClick= {handleClick}> {props.name} </div>;
    
}
 


export default LabeledInput; 