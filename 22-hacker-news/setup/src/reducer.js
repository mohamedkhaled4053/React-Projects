import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions';

const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, loading: action.payload };
  } else if (action.type === SET_STORIES) {
    return {
      ...state,
      articles: action.payload.hits,
      totalPages: action.payload.nbPages,
    };
  } else if (action.type === REMOVE_STORY) {
    let newArticles = state.articles.filter(
      (article) => article.objectID !== action.payload
    );
    return { ...state, articles: newArticles };
  } else if (action.type === HANDLE_PAGE) {
    if (action.payload === 'prev') {
      return { ...state, page: state.page - 1 };
    } else if (action.payload === 'next') {
      return { ...state, page: state.page + 1 };
    }
  } else if (action.type === HANDLE_SEARCH) {
    return {...state , query : action.payload, page: 0}
  }
};
export default reducer;
