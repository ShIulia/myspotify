// import React from "react";
// import "./App.css";
// import LabeledInput from "./LabeledInput";
// import Header from "./Header";


// function App() {
//   return (
//    <div>
//      <Header>This is a header</Header>
//      <div className="labels">
//         <LabeledInput name='AT HOME'></LabeledInput>
//         {/* <LabeledInput name='PARTY'></LabeledInput>
//         <LabeledInput name='DECADES'></LabeledInput>
//         <LabeledInput name='FOCUS'></LabeledInput>
//         <LabeledInput name='MOOD'></LabeledInput>
//         <LabeledInput name='HIP-HOP'></LabeledInput>
//         <LabeledInput name='ELECTRONIC'></LabeledInput>
//         <LabeledInput name='CHILL'></LabeledInput>
//         <LabeledInput name='WELLNESS'></LabeledInput>
//         <LabeledInput name='WORKOUT'></LabeledInput> */}
//         </div>
//         </div>
//   );
// }

// export default App;


import React from 'react';
import logo from './logo.svg';
import './App.css';
import LabeledInput from './LabeledInput'

function App() {

  const learnReactDescription = 'Learn React from Scoala IT';
  const reactTurorialUrl = 'https://www.w3schools.com/REACT/default.asp';

  const getGithubProfile = () => 'https://github.com/mmioana/webdevelopment-02';

  return (
    <div className="App">
      <header className="App-header">
          <a href="/categories">Link to another page</a>
        <LabeledInput
          id="client-id"
          label="Client Id"
          placeholder="Client Id Placeholder"
          defaultValue="Default"
        />
      </header>
    </div>
  );
}

export default App;
