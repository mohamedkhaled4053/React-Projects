export default function reducer(state, action) {
  if (action.type === "GET_DATA") {
    return { ...state, cart: action.payload, loading: false };
  } else if (action.type === "DELETE") {
    let newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  
  }
}
