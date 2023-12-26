import './App.css'
import { useState } from 'react';
function App() {
  // this is how change propgation works and this is where React comes into picture.
  // react reacts to the change. so it is REACT.
  let [counter, setCounter]= useState(15);
  const isValueValid = (operation)=>{
    if(operation == 'add' && counter<20){
      return true
    }
    if(operation == 'sub' && counter >0 ){
      return true;
    }
    return false;
  }
  const addValue = ()=>{
    if(isValueValid('add')){
      counter = counter + 1;
      setCounter(counter)
    }


  }
  const decValue = ()=>{
    if(isValueValid('sub')){
      counter = counter - 1;
      setCounter(counter);
    }

  }

  return (
    <>
      <h1>FIrst h1</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br/>
      <button onClick={decValue}>Decrease Value: {counter}</button>
      
    </>
  )
}

export default App
