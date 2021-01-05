import { actionTypes } from './ActionType';


const initialState = {
  category: 'all'
}

export const ReducerCategory = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CATEGORY:
      return {
        category: action.category
      }

    default:
      return state;
  }
}
