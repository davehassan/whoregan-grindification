var Recorder = React.createClass({
  getInitialState: function () {
    var name = this.props.name || "untitled";
    return { isRecording: false, track: (new Track({name: name})) };
  },

  componentDidMount: function () {},

  componentWillUnmount: function () {},

  updateTrack: function () {
    this.state.track.addNotes(KeyStore.all());
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
      </div>
    );
  }
});
