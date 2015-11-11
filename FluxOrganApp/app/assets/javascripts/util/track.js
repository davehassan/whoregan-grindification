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
  debugger;
};
Track.prototype.stopRecording = function () {
  this.addNotes([]);
};
