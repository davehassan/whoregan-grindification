(function (root) {
  var _trackStore = [];
  var CHANGE_EVENT = "change";
  var TrackStore = root.TrackStore = $.extend({}, EventEmitter.prototye);

  TrackStore.all = function () {
    return _trackStore.slice();
  };

  TrackStore.addChangeHandler = function (callback) {
    this.on(CHANGE_EVENT, callback);
  };

  TrackStore.removeChangeHandler = function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  };

  TrackStore.changed = function () {
    this.emit(CHANGE_EVENT);
  };

  TrackStore.add = function (track) {
    _trackStore.push(track);
  };

  TrackStore.delete = function (track) {
    _trackStore.splice(_trackStore.indexOf(track), 1);
  };

  TrackStore.dispatcherId = AppDispatcher.register(function (payload) {
    switch (payload.actionType) {
      case "KEY_PRESSED":
        if (_trackStore.indexOf(payload.noteName) === -1){
          _trackStore.push(payload.noteName);
          KeyStore.changed();
        }
        break;
      case "KEY_RELEASED":
        _trackStore.splice(_keyStore.indexOf(payload.noteName), 1);
        TrackStore.changed();
        break;
    }

  });





})(this);
