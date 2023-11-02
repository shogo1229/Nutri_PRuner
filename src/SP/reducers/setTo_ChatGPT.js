const setToChatGPT_Reducer = (state , action) => {
  if (typeof state ==="undefined"){
      return []
  }

  switch (action.type) {
    case 'SET_TO_CHATGPT':
      return action.payload;
    default:
      return state;
  }
};

export default setToChatGPT_Reducer;
