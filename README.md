# Frame loader

This simple HTML, CSS, and JavaScript setup allows you to load content within frames on the same page using buttons. The load() function in the JavaScript file hides all frame elements and then displays the selected frame based on the elementId parameter passed to it. Each frame contains a button to navigate to the next frame, and the first frame contains a button to return to the initial frame.

## Source

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Loader</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body onload="load(0)">
    <main>
      <div id="frame0">
        <button onclick="load(1)">Show Frame 1</button>
      </div>
      <div id="frame1" class="frame">
        <p>Frame 1</p>
        <button onclick="load(2)">Show Frame 2</button>
      </div>

      <div id="frame2" class="frame">
        <p>Frame 2</p>
        <button onclick="load(3)">Show Frame 3</button>
      </div>

      <div id="frame3" class="frame">
        <p>Frame 3</p>
        <button onclick="load(0)">Show Frame 0</button>
      </div>
    </main>
    <script src="./src/script.js"></script>
  </body>
</html>
```

### script.js

```js
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
```

### style.css

```css
.frame {
  display: none;
}
```
