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
    // check if there is any amount of item
    // if no amount then delete it
    let modifiedItem = state.cart.find((item) => item.id === action.payload);
    if (modifiedItem.amount - 1 <= 0) {
      let newCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: newCart };
    }

    // if the amount is more than one then decrease it
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
