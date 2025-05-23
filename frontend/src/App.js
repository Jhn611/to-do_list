import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from './redux/todosSlice';
import { toggleTheme } from './redux/themeSlice';
import './styles/App.css';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.items);
  const theme = useSelector(state => state.theme.mode);
  const [input, setInput] = React.useState('');

  useEffect(() => {
    dispatch(fetchTodos());
    const savedTheme = localStorage.getItem('theme') || 'light';
    dispatch(toggleTheme(savedTheme));
  }, [dispatch]);

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className={`app ${theme}`}>
      <h1>To-Do List</h1>
      <button onClick={() => dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'))}>
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(updateTodo({ id: todo.id, completed: !todo.completed }))}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;