var Key = React.createClass({

  getInitialState: function () {
    return { pressed: false};
  },
  handleKey: function () {
    if (KeyStore.all().indexOf(this.props.noteName) !== -1) {
      this.note.start();
      this.setState({pressed: true});
    } else {
      this.note.stop();
      this.setState({pressed: false});
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
    if (this.state.pressed) {
      className += " pressed";
    }
    return <li className={className}> </li>;
  }


});
