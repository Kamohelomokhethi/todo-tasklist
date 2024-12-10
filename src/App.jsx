import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {

  const [todos, setTodos] = useState([]);
  
  // Fetch tasks from the API
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("https://todo-server-4bvr.onrender.com/api/todos");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  return (
   <div className='task-container'>
      <div className='card'>
        <h2>list of all tasks</h2>
        <div className='all-tasks'>
          <ul>
          {todos.map((t) => (
            <li key={t.id}>{t.title}</li>
          ))}
          </ul>
        </div>
      </div>
   </div>
  )
}

export default App
