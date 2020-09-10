import { requestJSON, requestStream } from './request';

export const streamSong = (songId) => {
  return requestStream(`/playback/${songId}`, 'GET');
};

export const getSongs = () => {
  return requestJSON('/library', 'GET');
};
