const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload]
      };
    case 'UNSET_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload)
      };
    case 'REQUEST_LOGIN':
        return {
          ...state,
          user: action.payload,
        };
    default:
      return state;
  }
};

export default reducer;
