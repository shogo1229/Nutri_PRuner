const setToWebGL_Reducer = (state , action) => {
  if (typeof state ==="undefined"){
      return []
  }

  switch (action.type) {
    case 'SET_TO_WEBGL':
      return action.payload;
    default:
      return state;
  }
};

export default setToWebGL_Reducer;
