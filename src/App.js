 import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rutina from "./pages/rutina.js";



function App() {
 const arrayNombres= ["kirby","link","king-k.rool"];

    // const arrayObjetos= [
    // pesona1={nombre:"kirby"},
    // persona2={nombre:"link"},
    // persona3={nombre:"king k. rool"}]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="body">
        {arrayNombres.map(e=>{
          return (
            <div> 
              <Rutina nameCharacter={e}/>
            </div>
          )
        })
      }
      
      </div>
    </div>
  );
}

export default App;
