import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState ([]);

  const onChange =(event) => setTodo(event.target.value);
  
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === ""){
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  }

  const deleteTodo = (index) => {
    setTodos((currentArray) => currentArray.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
     <h1 className='title' >Todo List</h1>
     <form onSubmit={onSubmit}>
      <input onChange={onChange} value={todo} type='text' placeholder='Todo List를 입력해주세요' />
      <button className='addition'>추가</button>
      <hr />
      <ul>
        {todos.map((item,index) => (
          <li key={index}>
            {item}{' '}
            <button onClick={() => deleteTodo(index)}>삭제</button>
            </li>
))}
      </ul>
     </form>
    </div>
  );
}

export default App;


