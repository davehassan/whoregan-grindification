var Recorder = React.createClass({
  getInitialState: function () {
    var name = this.props.name || "untitled";
    return { isRecording: false, track: (new Track({name: name})) };
  },

  updateTrack: function () {
    this.state.track.addNotes(KeyStore.all());
  },

  playBack: function () {
    this.state.track.play();
  },

  saveRecording: function () {
    TrackStore.add(this.state.track);
    this.setState({track: new Track ({name: "untitled"})});
  },

  toggleRecord: function () {
    this.setState({ isRecording: !this.state.isRecording });
    if (!this.state.isRecording) {
      this.state.track.startRecording();
      KeyStore.addChangeHandler(this.updateTrack);
    } else {
      this.state.track.stopRecording();
      KeyStore.removeChangeHandler(this.updateTrack);
    }
  },

  render: function () {
    var buttonText = (this.state.isRecording ? "Stop" : "Record");
    return(
      <div>
        <button onClick={this.toggleRecord}>{buttonText}</button>
        <button onClick={this.playBack}>Play Back</button>
        <button onClick={this.saveRecording}> Save Recording </button>
      </div>
    );
  }
});
