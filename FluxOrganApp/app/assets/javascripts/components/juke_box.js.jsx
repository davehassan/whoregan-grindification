var JukeBox = React.createClass({
  render: function () {
    var allTracks = TrackStore.all().map(function (track) {
      return <TrackPlayer track={track} />;
    });
    return(
      <ul>
        {allTracks}
      </ul>
    );

  }
});
