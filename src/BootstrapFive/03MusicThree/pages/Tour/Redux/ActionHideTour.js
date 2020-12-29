import { actionTypes } from "./ActionTypes";

export const actionHideTour = (val) => (
  {
    type: actionTypes.HIDE_TOUR_PLAN,
    hide: val
  }
)