var Track =  function (attributes) {
  this.name = attributes.name;
  this.roll = attributes.roll || [];
};

Track.prototype.startRecording = function () {
  this.roll = [];
  this.startTime = Date.now();
};

Track.prototype.addNotes = function (notesArray) {
  var timeSlice = (Date.now() - this.startTime);
  this.roll.push({
    timeSlice: timeSlice,
    notes: notesArray
  });
};
Track.prototype.stopRecording = function () {
  this.addNotes([]);
};

Track.prototype.play = function () {
  if (this.interval) { return; }
  var playbackStartTime = Date.now();
  var currentNote = 0;
  this.interval = setInterval(function () {
    if (currentNote < this.roll.length) {
      this.roll[currentNote].notes.forEach(KeyActions.keyPressed);
      if ((Date.now() - playbackStartTime) > this.roll[currentNote].timeSlice) {
        this.roll[currentNote].notes.forEach(KeyActions.keyReleased);
        currentNote += 1;
      }
    } else {
      clearInterval(this.interval);
      delete this.interval;
    }
  }.bind(this),1);
};
