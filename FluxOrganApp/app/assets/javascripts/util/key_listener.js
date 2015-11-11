var codeToName = { 65: "F4", 83: "G4", 68: "A4", 70: "B4", 71: "C5" };

$(document).on("keyup", function () {
  var noteName = codeToName[event.keyCode];
  return KeyActions.keyReleased(noteName);
});

$(document).on("keydown", function () {
  var noteName = codeToName[event.keyCode];
  return KeyActions.keyPressed(noteName);
});
