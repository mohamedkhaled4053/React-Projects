import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions';

const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    return{...state, loading: action.payload}
  } else if(action.type === SET_STORIES) {
    return {...state, articles: action.payload}
  }
};
export default reducer;
