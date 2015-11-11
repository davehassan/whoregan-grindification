(function (root) {
  var _keyStore = [];
  var CHANGE_EVENT = "change";
  var KeyStore = root.KeyStore = $.extend({}, EventEmitter.prototype);

  KeyStore.all = function () {
    return _keyStore.slice();
  };

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
    switch (payload.actionType) {
      case "KEY_PRESSED":
        if (_keyStore.indexOf(payload.noteName) === -1){
          _keyStore.push(payload.noteName);
          KeyStore.changed();
        }
        break;
      case "KEY_RELEASED":
        _keyStore.splice(_keyStore.indexOf(payload.noteName), 1);
        KeyStore.changed();
        break;
    }

  });
})(this);
