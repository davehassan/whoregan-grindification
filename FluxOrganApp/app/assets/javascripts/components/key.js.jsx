var Key = React.createClass({

  keyPressed: function () {
    return (KeyStore.all().indexOf(this.props.noteName) !== -1);
  },
  handleKey: function () {
    if (this.keyPressed()) {
      this.note.start();
      this.forceUpdate();
    } else {
      this.note.stop();
      this.forceUpdate();
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
    var className = "noteKey";
    if (this.keyPressed()) {
      className += " pressed";
    }
    return <li className={className}> </li>;
  }


});
