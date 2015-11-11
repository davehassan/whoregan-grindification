var KeyActions = {
  keyPressed: function (noteName) {
    AppDispatcher.dispatch({
      actionType: "KEY_PRESSED",
      noteName: noteName
    });
  },

  keyReleased: function (noteName) {
    AppDispatcher.dispatch({
      actionType: "KEY_RELEASED",
      noteName: noteName
    });
  }
};
