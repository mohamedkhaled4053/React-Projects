export default function reducer(state, action) {
  if (action.type === "GET_DATA") {
    return { ...state, cart: action.payload, loading: false };
  } else if (action.type === "DELETE") {
    let newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  } else if (action.type === "INCREASE") {
    let newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });

    return { ...state, cart: newCart };
  } else if (action.type === "DECREASE") {
    let newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount - 1 };
      } else {
        return item;
      }
    });
    return { ...state, cart: newCart };
  }
}
