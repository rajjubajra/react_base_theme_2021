import { actionTypes } from './actionType';

export const actionFetchAlbum = (id) => (
  {
    type: actionTypes.FETCH_ALBUM,
    id: id
  }
)
