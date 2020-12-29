import { actionTypes } from '../actions/ActionTypes';


const initialState = {
  colourMode: 'basetheme-black-white',
  variant: 'white',
  backgroundDark: "#1c3044",
  backgroundLight: "#eeeeee",
}

export const reducerSelectColourMode = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_COLOUR_MODE:
      return {
        colourMode: action.payload,
        variant: action.variant
      }

    default:
      return state;
  }
}
