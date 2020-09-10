import React, { useState } from 'react';
import { Writeable } from 'stream';
import { streamSong } from '../../services/playback';

export default function Player() {
  const [songId, setSongId] = useState(0);

  const handleTrackSelection = ({ target }) => setSongId(target.value);

  let playingSong = streamSong(1)
    .then(res => {
      // playingSong = res.body.getReader();
      // console.log(playingSong);
      // return playingSong;
      return res.body.getReader();
    });
    // .then(reader => reader.read())
    // .then(({ done, value}) => {
    //   console.log(value);
    //   const data = new Blob(value);
    //   const url = URL.createObjectURL(data);
    //   console.log(url);
    // })
    // .catch(err => console.log(err));


  return (
    <>
      <h1>THIS IS THE PLAYER COMPONENT YEY!</h1>
      <p>It sould load the stream, whatever the hell that means</p>
      <p>It sould have playback controls</p>
      <p>
        This is a dummy track selector, since the table to play songs has not been implemented yet.
      </p>
      {playingSong}
      <input type='text' onChange={handleTrackSelection} value={songId} />
      {/* <audio src='localhost:3737/api/v1/playback/2'>
        Your browser does not support an audio player.
      </audio> */}
      {/* <video src='localhost:3737/api/v1/playback/2' /> */}
    </>
  );
}
