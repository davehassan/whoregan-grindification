var KeyActions = {
  codeToName: { 65: "F4", 83: "G4", 68: "A4", 70: "B4", 71: "C5" },

  keyPressed: function (event) {
    var noteName = KeyActions.codeToName[event.keyCode];
    AppDispatcher.dispatch({
      actionType: "KEY_PRESSED",
      noteName: noteName
    });
  },

  keyReleased: function (event) {
    var noteName = KeyActions.codeToName[event.keyCode];
    AppDispatcher.dispatch({
      actionType: "KEY_RELEASED",
      noteName: noteName
    });
  }
};
