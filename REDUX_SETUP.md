# Redux Setup Guide

This is a complete Redux example for your React application using Redux Toolkit.

## Installation

First, install Redux Toolkit and React-Redux:

```bash
npm install @reduxjs/toolkit react-redux
```

## File Structure

```
src/
├── redux/
│   ├── store.js           # Redux store configuration
│   └── slices/
│       ├── counterSlice.js  # Counter state management
│       └── todoSlice.js     # Todo state management
├── components/
│   ├── Counter.jsx        # Counter component example
│   ├── Counter.module.css
│   ├── TodoList.jsx       # Todo list component example
│   └── TodoList.module.css
└── main.jsx               # Updated with Redux Provider
```

## How It Works

### 1. Store Setup (`redux/store.js`)
- Configures the Redux store with slices
- Combines multiple reducers (counter, todos)

### 2. Slices (`redux/slices/`)
- **counterSlice.js**: Manages counter state
  - Actions: increment, decrement, incrementByAmount, reset
  
- **todoSlice.js**: Manages todo state
  - Actions: addTodo, removeTodo, toggleTodo, setFilter

### 3. Components
- **Counter.jsx**: Demonstrates useDispatch and useSelector hooks
- **TodoList.jsx**: Full-featured todo manager with filtering

## Usage in Components

### Using Redux Hooks

```jsx
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/slices/counterSlice';

function MyComponent() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
    </div>
  );
}
```

## Key Redux Concepts

### useDispatch
- Hook to dispatch actions
- Trigger state changes

### useSelector
- Hook to select state from store
- Component re-renders when selected state changes

### Slices
- Contains reducer, actions, and initial state
- Automatically generates action creators

## Adding to Your App

1. Import components in your App.jsx:
```jsx
import Counter from './components/Counter';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div>
      <Counter />
      <TodoList />
    </div>
  );
}
```

2. Run the dev server:
```bash
npm run dev
```

## Creating New Slices

Example: Creating a user slice

```javascript
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
```

Then add it to store.js:
```javascript
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    user: userReducer,  // Add here
  },
});
```
