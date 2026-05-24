import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo, setFilter } from '../redux/slices/todoSlice';
import styles from './TodoList.module.css';

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.items);
  const filter = useSelector(state => state.todos.filter);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className={styles.container}>
      <h2>Todo List Example</h2>
      
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
          placeholder="Add a new todo..."
          className={styles.input}
        />
        <button onClick={handleAddTodo} className={styles.addBtn}>
          Add
        </button>
      </div>

      <div className={styles.filters}>
        {['all', 'active', 'completed'].map(f => (
          <button
            key={f}
            className={filter === f ? styles.activeFilter : ''}
            onClick={() => dispatch(setFilter(f))}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <ul className={styles.todoList}>
        {filteredTodos.map(todo => (
          <li key={todo.id} className={styles.todoItem}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span className={todo.completed ? styles.completed : ''}>
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className={styles.deleteBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {filteredTodos.length === 0 && (
        <p className={styles.empty}>No todos found</p>
      )}
    </div>
  );
}
