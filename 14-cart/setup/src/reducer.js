export default function reducer(state, action) {
    if(action.type === 'GET_DATA'){
        return {...state, cart: action.payload, loading: false}
    }
}