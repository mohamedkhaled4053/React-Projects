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
    let newpage;
    if (action.payload === 'prev') {
      if (state.page === 0) {
        newpage = state.totalPages - 1;
      } else {
        newpage = state.page - 1;
      }
      return { ...state, page: newpage };
    } else if (action.payload === 'next') {
      if (state.page === state.totalPages -1) {
        newpage = 0
      } else {
        newpage = state.page + 1;
      }
      return { ...state, page: newpage };
    }
  } else if (action.type === HANDLE_SEARCH) {
    return { ...state, query: action.payload, page: 0 };
  }
};
export default reducer;
