import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import AddForm from './AddForm.js'
import Table from './Table.js';


function App() {
  const[list, updateList] = useState([]);
  const[seen, setSeen] = useState(false);


  useEffect(() => {
  getItems();

  }, []);
 

const addItem = (name, date) => {
  const payload = {"name": name, "date": date};
  axios.post('http://localhost:8080/add-task', payload).then((res) => {
    const itemToAdd = {id: res.data, name: payload.name, date: payload.date};
    console.log([...list, itemToAdd]);
    updateList([...list, itemToAdd].sort((a, b) => a.date.localeCompare(b.date)));
    setSeen(false);
  }).catch((e) => {
      setSeen(false);
  });

}

const getItems = () => {
  axios.get("http://localhost:8080/get-task").then((response) => {
 updateList(response.data.sort((a, b) => a.date.localeCompare(b.date)));

  });
}
const deleteItem = (id) => {
  console.log(id);
  axios.delete(`http://localhost:8080/delete-task/${id.id}`).then((res) => {
    updateList(list.filter(item => item.id !== id.id));
  });

}
  return (
   <div className="App">
      <header className="App-header">
        <button onClick={()=> setSeen(!seen)}>{seen ? "Hide" : "Add Task"}</button>
        {seen && <AddForm add = {addItem}/>}
        {!seen && (list.length === 0 ? (<label>Add some Tasks!</label>) : (<Table list = {list} onDelete = {deleteItem}/>))}  
      </header>  
    </div>
  );
}

export default App;
