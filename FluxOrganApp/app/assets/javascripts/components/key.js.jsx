var Key = React.createClass({

  handleKey: function () {
    if (KeyStore.all().indexOf(this.props.noteName) !== -1) {
      this.note.start();
    } else {
      this.note.stop();
    }
  },

  componentDidMount: function () {
    this.note = new Note(Tones[this.props.noteName]);
    KeyStore.addChangeHandler(this.handleKey);
  },

  componentWillUnmount: function () {
    KeyStore.removeChangeHandler(this.handleKey);
  },

  render: function () {
    return <li className="noteKey"> </li>;
  }


});
