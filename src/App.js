import './App.css';
import { useState } from 'react';

function App() {

   const todoArr = [];
   const removeArr = [];

  function ToDoApp(){

  const [text, setText] = useState("");
   
  function onComplete(){
    todoArr.map((item)=>{
      let checkedFlag = document.getElementById(item.id).checked;
      if(checkedFlag){
        let checkedId = document.getElementById(item.id).id;
        let temp = todoArr[checkedId];
        removeArr.push(temp);
        todoArr[checkedId].id = "X";
        document.getElementById("input-add-text").focus();
      }else{
        // do nothing
      }
    })
  }

  function onGetInputText(oEvent){
    let val = oEvent.target.value;
    setText(val);
  }

  function addItem(){
    var lastIndex = todoArr.length;
    todoArr.push({id: lastIndex, value: text, likeCount:0 , dislikeCount:0 });
    setText("");
  } 

    return(
    <div>
      <div className="container">
        <button className="switch" onClick={()=>{
          document.querySelector('html').classList.remove('theme-light');
          document.querySelector('html').classList.add('theme-dark');
        }}>Dark</button>  
        <button className="switch" onClick={()=>{
          document.querySelector('html').classList.remove('theme-dark');
          document.querySelector('html').classList.add('theme-light');
        }}>Light</button>
        <div className="header">
          <h1>To-Do-App</h1>
          <small>All your worklist at one place.</small>
        </div>
        <div className="add-item">
          <h2>Add Items</h2>
          <div className="input-flex">
            <input onChange={onGetInputText} className="input-add-text" type="text" id="input-add-text" value={text} ></input>
            <button onClick={addItem} className="input-add-btn">Add</button>
          </div>
        </div>
        <div className="todo">
          <h2>TODO</h2>
          {todoArr.map((item)=>{
           if(item.id !== "X"){
            return(
              <ul className="todo-list">
                <li className="flex-container">
                <div className="flex-item">
                  <input id={item.id} type="checkbox"/>{item.value}
                </div>
                <div>
                  <button className="likes flex-item" id={item.id} onClick={()=> {
                   return todoArr[item.id].likeCount = todoArr[item.id].likeCount + 1; 
                  }}>👍</button><span>{item.likeCount}</span>
                </div>
                <div>
                  <button className="likes flex-item" onClick={()=>{
                   return todoArr[item.id].dislikeCount = todoArr[item.id].dislikeCount + 1; 
                  }}>👎</button>{item.dislikeCount}
                </div>
                </li> 
              </ul>
            )}
          })}  
          <button className="submit" onClick={onComplete}>Move to Completed Section</button> 
        </div>
        <div className="completed">
           <h2>Completed</h2>
           {removeArr.map((item)=>{
            return(
                <ul className="completed-list">
                  <li className="strike" key={item.id}>
                  <div>
                    <input id={item.id} type="checkbox"/>{item.value}
                  </div>
                 </li>
                </ul>
            )}
          )}  
        </div>
        <div>
          <h2>Clear and Reset</h2>
          <div className="flex-container">
            <button className="clearScreen" onClick={()=>{
              document.querySelector("#input-add-text").value = "";
            }}>Clear</button>
            <button className="resetApp" onClick={()=>{
              todoArr.splice(0);
              removeArr.splice(0);
            }}>Reset</button>
          </div>
        </div>
      </div>
    </div> 
      )
  }

  return (
    <div className="App">
      <ToDoApp />
    </div>
  );
}

export default App;
