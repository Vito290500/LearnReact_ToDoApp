import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TODO_TASK } from './data'

import TodoForm from './todoForm/todoForm'
import TodoItem from './todoList/todoItem'

function App() {

  const [stateModal, setStateModal ] = useState(false)
  const [todos, setTodos] =useState([]);

  function openModalClick(){
    setStateModal(true);
  }

  function saveFormClick(newTodo){
    setTodos([...todos, newTodo]);
    setStateModal(false);
  }
 
  return (
      
    <div className='container'>

      <h2>TODO LIST</h2>

      <div className='header'>
        <button onClick={openModalClick}>Aggiungi Todo</button>
        <select name="filtri" id="">
          <option value="1">all</option>
        </select>
      </div>


      <ul className='TodoList'>

        {TODO_TASK.map((item) => (
          <TodoItem key={item.title} {...item} />
        ))}

        {todos.map((newTodo, index) => (
          <TodoItem key={newTodo.title} {...newTodo} />
        ))}
      </ul>

      {stateModal ? <TodoForm onSave={saveFormClick} onClose={() => setStateModal(false)} /> : null }

    </div>

  )
}

export default App
