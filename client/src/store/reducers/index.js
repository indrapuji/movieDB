const initialState = {
  favorites: [],
};

function reducer(state = initialState, action) {
  if (action.type === "ADDFAV") {
    return { ...state, favorites: state.favorites.concat(action.payload) };
  } else if (action.type === "DELFAV") {
    return { ...state, favorites: state.favorites.filter((favorites) => favorites !== action.payload) };
  }
  return state;
}

export default reducer;
