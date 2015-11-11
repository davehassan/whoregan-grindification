var TrackPlayer = React.createClass({
  playTrack: function () {
    this.props.track.play();
  },

  deleteTrack: function () {
    return "fuck you";
  },

  render: function () {
    return(
      <li>
        <button onClick={this.playTrack}></button>
        <button onClick={this.deleteTrack}></button>
      </li>
    );

  }
});
