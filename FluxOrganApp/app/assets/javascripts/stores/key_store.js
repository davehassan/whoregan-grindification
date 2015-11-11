(function (root) {
  var _keyStore = [];
  var CHANGE_EVENT = "change";
  var KeyStore = root.KeyStore = {};

  KeyStore.addChangeHandler = function (callback) {
    this.on(CHANGE_EVENT, callback);
  };

  KeyStore.removeChangeHandler = function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  };

  KeyStore.changed = function () {
    this.emit(CHANGE_EVENT);
  };

  KeyStore.dispatcherId = AppDispatcher.register(function (payload) {
    switch (payload.eventType) {
      case "KEY_PRESSED":
        _keyStore.push(payload.noteName);
        break;
      case "KEY_RELEASED":
        _keyStore.splice(_keyStore.indexOf(payload.noteName), 1);
        break;
    }

  });
})(this);
