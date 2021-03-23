import { useState } from 'react';
import './App.css';

function Todo(){

  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [completeItems, setCompleteItems] = useState([]);

  function getUserInput(oEvent){
    setText(oEvent.target.value);
  }

  function onAdd(oEvent){
    setItems(oldarr => [...oldarr, {flag: "", text: text}]);
    setText("");
  }

  function onComplete(oEvent){
    if(oEvent.target.checked === true){
        oEvent.target.checked = false;
        let msg = items[oEvent.target.id].text
        setCompleteItems(oldarr =>[...oldarr, {flag: "X", message: msg}]);
        items.splice(oEvent.target.id, 1);
    }
  }

  function onIncomplete(oEvent){
    if(oEvent.target.checked === false){
        let msg = completeItems[oEvent.target.id].message;
        setItems(oldarr =>[...oldarr, {flag: "", text: msg}]);
        completeItems.splice(oEvent.target.id, 1);
    }
  }

  return(
    <div className="container">
      
      <button className="switch" onClick={(oEvent)=>{
        // document.querySelector('html').classList.remove('theme-light');
        // document.querySelector('html').classList.add('theme-dark');
        oEvent.view.document.documentElement.classList.remove('theme-light');
        oEvent.view.document.documentElement.classList.add('theme-dark');
      }}>Dark</button>  
      <button className="switch" onClick={(oEvent)=>{
        // document.querySelector('html').classList.remove('theme-dark');
        // document.querySelector('html').classList.add('theme-light');
        oEvent.view.document.documentElement.classList.remove('theme-dark');
        oEvent.view.document.documentElement.classList.add('theme-light');
      }}>Light</button>
      <div className="header">
        <h1>To-Do-App</h1>
        <small>All your worklist at one place.</small>
      </div>

      <div className="add-item">
        <h2>Add Items</h2>
        <div className="input-flex">
          <input onChange={getUserInput} className="input-add-text" type="text" value={text} />
          <button onClick={onAdd} className="input-add-btn">Add</button>
        </div>  
      </div>
      <div className="todo">
        <h2>TODO</h2>
        <ul className="todo-list">
          {items.map((item, index)=>{
            return(
              <div>
                <li className="flex-container" key={index}>
                <div className="flex-item"> 
                  <input id={index} onClick={onComplete} type="checkbox" />{item.text}
                </div>  
                </li>
              </div>
            )
          })}
        </ul>
      </div>
      <div className="completed">
        <h2>Completed</h2>
        <ul className="completed-list">
        {completeItems.map((item, index)=>{
          return(
            <li className="strike">
              <div>
              <input id={index} onChange={onIncomplete} type="checkbox" defaultChecked="true" />{item.message}
              </div>
            </li>
          ) 
        })}
        </ul>
      </div> 
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
