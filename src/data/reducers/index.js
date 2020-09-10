import { combineReducers } from 'redux';

import { activeSongReducer as activeSong } from './activeSongReducer';

export default combineReducers({
  activeSong
});
