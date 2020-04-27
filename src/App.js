import React from "react";
import "./App.css";
import LabeledInput from "./LabeledInput";
import Header from "./Header";


function App() {
  return (
   <div>
     <Header>This is a header</Header>
     <div className="labels">
        <LabeledInput name='AT HOME'></LabeledInput>
        <LabeledInput name='PARTY'></LabeledInput>
        <LabeledInput name='DECADES'></LabeledInput>
        <LabeledInput name='FOCUS'></LabeledInput>
        <LabeledInput name='MOOD'></LabeledInput>
        <LabeledInput name='HIP-HOP'></LabeledInput>
        <LabeledInput name='ELECTRONIC'></LabeledInput>
        <LabeledInput name='CHILL'></LabeledInput>
        <LabeledInput name='WELLNESS'></LabeledInput>
        <LabeledInput name='WORKOUT'></LabeledInput>
        </div>
        </div>
  );
}

export default App;
