import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: null,
};

const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    setBag: (state, action) => {
      state.items = action.payload;
      try { localStorage.setItem('myBag', JSON.stringify(action.payload)); } catch(e){}
    },
    clearBag: (state) => {
      state.items = null;
      try { localStorage.removeItem('myBag'); } catch(e){}
    },
    loadBagFromStorage: (state) => {
      try { const raw = localStorage.getItem('myBag'); if(raw) state.items = JSON.parse(raw); } catch(e){}
    }
  }
});

export const { setBag, clearBag, loadBagFromStorage } = bagSlice.actions;
export default bagSlice.reducer;
