import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  kundali: null,
  vargKundali: null,
};

const kundaliSlice = createSlice({
  name: 'kundali',
  initialState,
  reducers: {
    setKundali: (state, action) => {
      state.kundali = action.payload;
      try { localStorage.setItem('kundali', JSON.stringify(action.payload)); } catch(e){}
    },
    setVargKundali: (state, action) => {
      state.vargKundali = action.payload;
      try { localStorage.setItem('vargKundali', JSON.stringify(action.payload)); } catch(e){}
    },
    clearKundali: (state) => { state.kundali = null; state.vargKundali = null; try { localStorage.removeItem('kundali'); localStorage.removeItem('vargKundali'); } catch(e){} }
  }
});

export const { setKundali, setVargKundali, clearKundali } = kundaliSlice.actions;
export default kundaliSlice.reducer;
