import { useState } from 'react';
import './App.css';
import AddTask from './component/AddTask';
import List from './component/List';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <AddTask updateTodos={(task) => {
        const obj = {
          id: Date.now(),
          title: task.trim(),
          isCompleted: false
        }

        if (obj.title) {
          const a = todos.concat(obj);
          setTodos(a);
          //console.log(a)
        }
        //console.log(Array.isArray(todos))
      }} />
      <List todos={todos} removeTask={(id) => {
        const x = todos.filter(item => item.id !== id);
        setTodos(x)
      }} />
    </div>
  );
}

export default App;
