import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('/api/todos');
  return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (text) => {
  const response = await axios.post('/api/todos', { text });
  return response.data;
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async ({ id, ...updates }) => {
  const response = await axios.put(`/api/todos/${id}`, updates);
  return response.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await axios.delete(`/api/todos/${id}`);
  return id;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: JSON.parse(localStorage.getItem('todos')) || [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
        localStorage.setItem('todos', JSON.stringify(action.payload));
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
        localStorage.setItem('todos', JSON.stringify(state.items));
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(todo => todo.id === action.payload.id);
        state.items[index] = action.payload;
        localStorage.setItem('todos', JSON.stringify(state.items));
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(todo => todo.id !== action.payload);
        localStorage.setItem('todos', JSON.stringify(state.items));
      });
  }
});

export default todosSlice.reducer;