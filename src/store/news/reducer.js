const initialState = {
  list: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'news/setNews':
      return { ...state, list: [...action.payload] };
    default:
      return state;
  }
};

export default newsReducer;
