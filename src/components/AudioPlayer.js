import React from "react";
import { ReactDOM } from "react";
import audioSong from "../../videos/washywashy.mp4";

class AudioPlayer extends React.Component {
  render() {
    return (
      <React.Fragment>
      <audio src={audioSong} controls />
      </React.Fragment>
    );
  }
}
ReactDOM.render(<AudioPlayer />, document.getElementById('root'));