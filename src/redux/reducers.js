const initialState = {
  cart: { total: 120.00 },
  user: { loggedIn: false },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CART':
      return { ...state, cart: action.payload };
    case 'LOGIN_USER':
      return { ...state, user: { loggedIn: true } };
    default:
      return state;
  }
};

export default rootReducer;