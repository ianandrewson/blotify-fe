import { request } from './request';

export const streamSong = (songId) => {
  return request(`/playback/${songId}`, 'GET');
};

export const getSongs = () => {
  return request('/library', 'GET');
};
