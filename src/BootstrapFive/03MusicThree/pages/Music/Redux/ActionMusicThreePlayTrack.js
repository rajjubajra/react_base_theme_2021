import { ActionMusicThreeTypes } from './ActionMusicThreeTypes';

export const ActionMusicThreePlayTrack = (trackUrl, id, play, playAll) => (
  {
    type: ActionMusicThreeTypes.MUSIC_THREE_PLAY_THE_TRACK,
    id: id,
    trackUrl: trackUrl,
    play: play, /** true or false */
    playAll: playAll /** true or false */

  }
)