import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: 'light' },
  reducers: {
    toggleTheme: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem('theme', action.payload);
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;