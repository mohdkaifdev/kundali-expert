import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 0,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload;
      try { localStorage.setItem('walletBalance', JSON.stringify(action.payload)); } catch(e){}
    },
    clearBalance: (state) => { state.balance = 0; try { localStorage.removeItem('walletBalance'); } catch(e){} },
    loadBalanceFromStorage: (state) => { try { const raw = localStorage.getItem('walletBalance'); if(raw) state.balance = JSON.parse(raw); } catch(e){} }
  }
});

export const { setBalance, clearBalance, loadBalanceFromStorage } = walletSlice.actions;
export default walletSlice.reducer;
