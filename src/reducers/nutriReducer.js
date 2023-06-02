const initialState = {
  toWebGUI: [],
  toChatGPT: []
};

const nutriReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TO_WEBGUI':
      return {
        ...state,
        toWebGUI: action.payload
      };
    case 'SET_TO_CHATGPT':
      return {
        ...state,
        toChatGPT: action.payload
      };
    default:
      return state;
  }
};

export default nutriReducer;
