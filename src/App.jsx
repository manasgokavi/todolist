import { useState } from 'react';
import './App.css';
import TodoRow from './Component/TodoRow';

function App() {
  const [items, setItems] = useState([]);

  const itemAdd = () => {
    let inputValue = document.getElementById('listvalue').value;
    if (inputValue && items) {
      if (items.includes(inputValue)) {
        alert("Task Already Exists!!");
      } else {
        setItems([...items, inputValue]);
        document.getElementById('listvalue').value = "";
      }
    }
  };
  

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <>
      <h1 style={{fontSize: '2rem', textAlign: 'center'}}>To-do List</h1>
      <h2 style={{ textAlign: 'center', fontSize: '10px' }}>By Manas Gokavi</h2>

      <div className="input-group mb-3" style={{ display: 'flex', width: '100%', position: 'fixed', zIndex: '1',bottom: '0',backgroundColor: 'white', height:'auto'}}>
        <input
          type="text"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Add Task Here..."
          id="listvalue"
          style={{margin: '1rem 20rem'}}
        />
        <button type="button" class="btn btn-primary" onClick={itemAdd} style={{position:'absolute', right: '13rem', top: '20%'}}>Add To List</button>
      </div>

      {items.map((element, index) => (
        <TodoRow
          key={index} 
          label={element}
          index={index}
          deleteItem={deleteItem} 
        />
      ))}
    </>
  );
}

export default App;
