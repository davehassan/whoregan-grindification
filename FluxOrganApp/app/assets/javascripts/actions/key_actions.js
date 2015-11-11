var KeyActions = {
  keyPressed: function (key) {
    AppDispatcher.dispatch({
      actionType: "KEY_PRESSED",
      noteName: key
    });
  },

  keyReleased: function (key) {
    AppDispatcher.dispatch({
      actionType: "KEY_RELEASED",
      noteName: key
    });
  }
};
