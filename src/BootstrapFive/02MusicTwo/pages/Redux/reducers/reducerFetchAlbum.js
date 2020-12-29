const { actionTypes } = require("../actions/actionType")

const initalState = {
  albumId: ''
}

export const reducerFetchAlbum = (state = initalState, action) => {
  switch (action.type) {

    case actionTypes.FETCH_ALBUM:
      return {
        albumId: action.id
      }
    default:
      return state;
  }


}



