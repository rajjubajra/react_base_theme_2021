const { ActionMusicThreeTypes } = require('./ActionMusicThreeTypes');

const initalState = {
  id: '',
  trackUrl: '',
  play: false,
  playAll: false
}

export const ReducerMusicThreePlayTrack = (state = initalState, action) => {

  switch (action.type) {
    case ActionMusicThreeTypes.MUSIC_THREE_PLAY_THE_TRACK:
      return {
        id: action.id,
        trackUrl: action.trackUrl,
        play: action.play,
        playAll: action.playAll
      }
    /** default state */
    default:
      return state;
  }

}



