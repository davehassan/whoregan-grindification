var Organ = React.createClass({
  render: function () {
    var noteArray = [];
    for (var noteName in Tones) {
      noteArray.push(<Key key={noteName} noteName={noteName} />);
    }

    return (
      <ul className="organ group">
        {noteArray}
      </ul>
    );
  }
});
