import { actionTypes } from './ActionType';

export const ActionCategory = (category) => {

  return {
    type: actionTypes.CATEGORY,
    category: category
  }

}