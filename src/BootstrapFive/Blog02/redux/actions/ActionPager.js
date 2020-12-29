import { actionTypes } from './ActionTypes';

export const ActionPager = (pager) => (
  {
    type: actionTypes.GO_BACK_TO_THE_PAGE,
    pager: pager
  }
)