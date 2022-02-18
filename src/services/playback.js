import {requestJSON, requestStream} from './request';

export const streamSong = (songId, addHeaders = {}) => {
  return requestStream(`/playback/${songId}`, 'GET', addHeaders);
};

export const getSongs = () => {
  return requestJSON('/library', 'GET');
};
