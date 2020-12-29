const { actionTypes } = require('./ActionTypes');

const initalState = {
  start_fetching: false,
  fetched: false,
  fetch_error: '',
  data: [],
  dataLength: 0,
  title: '',
  body: '',
  galleryIntro: '',
  logoHorizontal: '',
  logoHorizontalAlt: '',
  logoSquare: '',
  logoSquareAlt: '',
  links: []
}

export const reducerFetchData = (state = initalState, action) => {

  switch (action.type) {
    case actionTypes.START_FETCHING:
      return {
        fetching: true
      }
    /** FETCH DATA FOR Music main page */
    case actionTypes.FETCHED:
      console.log('DATA REDUCER', action.data);
      const internalLink = [];
      action.data[0].field_link_internal.map(item => {
        const { uri, title } = item;
        internalLink.push({
          /** remove 'internal:/' from drupal defaul link */
          uri: uri.split(":").pop(),
          title: title
        })
      });
      const externalLink = [];
      action.data[0].field_link_external.map(item => {
        const { uri, title } = item;
        externalLink.push({
          uri: uri,
          title: title
        })
      });
      return {
        fetched: true,
        data: action.data,
        dataLength: action.data.length,
        title: action.data[0].title[0].value,
        body: action.data[0].body[0].value,
        galleryIntro: action.data[0].field_gallery_intro[0].value,
        logoHorizontal: action.data[0].field_logo_horizontal[0].url,
        logoHorizontalAlt: action.data[0].field_logo_horizontal[0].alt,
        logoSquare: action.data[0].field_logo_square[0].url,
        logoSquareAlt: action.data[0].field_logo_square[0].alt,
        links: externalLink.concat(internalLink)
      }
    case actionTypes.FETCH_ERROR:
      return {
        fetched: false,
        fetching: false,
        error: action.error
      }
    /** default state */
    default:
      return state;
  }

}



