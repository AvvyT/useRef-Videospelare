import React, { useRef } from 'react';
import './App.css';


function App() {
  const ref = useRef(null);
  const time = useRef(null);

  function toPlay() {
    ref.current.play();
  }

  function toPaus() {
    ref.current.pause();
  }

  function toBack() {
    // currentTime property gives the current playback time in seconds.
    // Setting this value seeks the media to the new time.
    ref.current.currentTime = 0;
  }

  function progressTime() {
    time.current.value = ref.current.currentTime;
  }

  return (
    <div className="App">
      <header className="App-header">

        <video
          ref={ref}
          onTimeUpdate={progressTime}
          src="https://download.blender.org/peach/trailer/trailer_1080p.ogg"
          style={{ width: '750px' }}
        />
        <progress
          ref={time}
          value="0"
          max="100"
          border='1'
          style={{width:"600px"}}
        />
        <div>
          <button onClick={toPlay}>Play</button>
          <button onClick={toPaus}>Paus</button>
          <button onClick={toBack}>Back</button>
        </div>
      </header>
    </div>
  );
}

export default App;
