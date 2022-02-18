# Resources

1. Combining buffers:
  * https://stackoverflow.com/questions/14143652/web-audio-api-append-concatenate-different-audiobuffers-and-play-them-as-one-son
2. Recursive reader.read
  * https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/getReader
3. Range header
  * https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/getReader
4. createReadStream
  * https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/getReader

It seems like you won't be able to use an audio element to control playback if you want to have more fine tuned control over the audio buffers for playback. Instead, use audioContext.