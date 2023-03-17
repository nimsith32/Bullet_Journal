import React, {useState} from 'react';
import Header from './TodoHeader';
import './TodoList.css';
import Form from './TodoForm';
import List from './List';


const TodoList = () => {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className='container-todo'>
      <div className='app-wrapper-todo'>
        <div>
          <Header />
        </div>
        <div>
          <Form
            input = {input}
            setInput = {setInput}
            todos = {todos}
            setTodos = {setTodos}
            />
        </div>
        <div>
          <List todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  )
}

export default TodoList