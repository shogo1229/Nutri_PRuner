const setToWebGL_Reducer = (state = false, action) => {  
    switch (action.type) {
      case 'SET_TO_WEBGL':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default setToWebGL_Reducer;