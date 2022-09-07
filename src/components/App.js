import React , { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [hstate , setHstate] = useState("Marco");
  const [bstate , setBstate] = useState("Polo");
  
  function change(){
    setHstate((prevValue) => {
      if(prevValue == "Polo"){
        return "Marco";
      }else{
        return "Polo";
      }
    });
    setBstate((prevValue) => {
      if(prevValue == "Polo"){
        return "Marco";
      }else{
        return "Polo";
      }
    });
  }
  return (
    <div id="main">
      <h1 id="marco-polo">{hstate}</h1>
      <button id="marco-polo-toggler" onClick={change}>{bstate}</button>
    </div>
  )
}


export default App;
