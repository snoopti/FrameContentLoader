function load(elementId) {
  var allElements = document.querySelectorAll(".frame");
  allElements.forEach(function (element) {
    element.style.display = "none";
  });

  var selectedElement = document.getElementById("frame" + elementId);
  selectedElement.style.display = "block";

  if (elementId !== 0) {
    document.getElementById("frame0").style.display = "none";
  }
}