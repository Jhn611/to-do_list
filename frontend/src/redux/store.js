import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    theme: themeReducer
  }
});

export default store;