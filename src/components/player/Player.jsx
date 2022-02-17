import React, { useEffect, useState } from 'react';
// import { Writeable } from 'stream';
import { streamSong } from '../../services/playback';

export default function Player() {
  const [songId, setSongId] = useState('');
  const [songData, setSongData] = useState();
  
  // const AudioContext = window.AudioContext;
  // const audioCtx = new AudioContext();

  // THIS IS THE CLOSEST TO WORKING
  // useEffect(() => {
  //   if(songId) {
  //     streamSong(songId)
  //       .then(res => {
  //         return res.body.getReader();
  //       })
  //       .then(reader => {
  //         return reader.read();
  //       })
  //       .then(({ done, value }) => {
  //         // console.log('done: ', done, '; value: ', value);
  //         // if(done) return;
  //         console.log(value);
  //         const data = new Blob([value], { type: 'audio/mp3' });
  //         // console.log(data);
  //         return URL.createObjectURL(data);
  //       })
  //       .then(audioData => {
  //         setSongData(audioData);
  //         console.log('audioData: ', audioData);
  //       });
  //   }
  // }, [songId]);

  useEffect(() => {
    if(songId) {
      streamSong(songId)
        .then(res => {
          return res.body.getReader();
        })
        .then(reader => {
          //promisfy this
          //resolve with array of all data
          //iterate with while loop, push read to result, resolve result
          //closure while condition, updated when done is true
          return new Promise((resolve, reject) => {
            let result;
            let finished = false;
            debugger;
            while(!finished) {
              console.log('reading');
              reader.read()
                .then(({ done, value }) => {
                  console.log('looking at data');
                  if(done) {
                    finished = true;
                    resolve(result);
                  }
                  console.log('value: ', value);
                  result += value;
                });
            }
          });
        })
        .then(rawData => {
          const data = new Blob([rawData], { type: 'audio/mp3' });
          console.log(data);
          return URL.createObjectURL(data);
        })
        .then(audioData => {
          setSongData(audioData);
          console.log('audioData: ', audioData);
        });
    }
  }, [songId]);

  const handleTrackSelection = ({ target }) => setSongId(target.value);


  return (
    <>
      <h1>THIS IS THE PLAYER COMPONENT YEY!</h1>
      <p>It sould load the stream, whatever the hell that means</p>
      <p>It sould have playback controls</p>
      <p>
        This is a dummy track selector, since the table to play songs has not been implemented yet.
      </p>
      <input type='text' onChange={handleTrackSelection} value={songId} />
      {<audio controls src={songData}>
        Your browser does not support an audio player.
      </audio>}
    </>
  );
}
