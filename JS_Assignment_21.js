Javascript DOM Assignment
1. Select an <h2> tag with id of text and change its inner text to
“Hello World”.
A=const h2Tag = document.querySelector('#text');
h2Tag.innerText = 'Hello World';

2. Apply following style to the same h2 using Javascript DOM
Method.
colour: red,
fontWeight: bold,
textTransform: uppercase
A=const h2 = document.getElementById('text');
h2.style.color = 'red';
h2.style.fontWeight = 'bold';
h2.style.textTransform = 'uppercase';

3. Create a simple calculator that takes the input from
input1, input 2 and add them together.
A=HTML=<input type="text" id="input1" />
<input type="text" id="input2" />
<button onclick="add()">Add</button>
<p id="result"></p>

JAVASCRIPT=function add() {
  const input1 = parseFloat(document.getElementById("input1").value);
  const input2 = parseFloat(document.getElementById("input2").value);
  const result = input1 + input2;
  document.getElementById("result").textContent = result;
}

4. What is the error in the following code?
<!DOCTYPE html>
<html> <body>
<p class="text">Hello World!</p>
<script>
document.getElementById("text").innerHTML
</script>
</body>
</html>
A=The error in the following code is that the script is trying to get an element with an ID of "text" using the getElementById method, but the element with the "text" class has been defined instead of an element with an ID. The getElementById method should be used to select an element by its ID, and the element in the HTML should have an id attribute instead of a class attribute. 
To fix the error, the class attribute in the HTML should be changed to an id attribute 

5. Using JS Dom select a button and set its onclick event to
logging hello in the console.
A=HTML:
<button id="myButton">Click me!</button>

JavaScript:
const myButton = document.getElementById('myButton');
myButton.onclick = function() {
  console.log('hello');
};

6. Using alert, prevent a person from leaving the screen using JS
DOM.
A=<!DOCTYPE html>
<html>
<head>
	<title>Prevent leaving screen using JS DOM</title>
</head>
<body>
	<a href="https://www.google.com">Go to Google</a>
	<script>
		window.addEventListener('beforeunload', (event) => {
			event.preventDefault();
			event.returnValue = '';
			alert('Please don\'t leave!');
		});
	</script>
</body>
</html>

7. Select all the h2 tags on screen and change their colour to
purple.
A=<!DOCTYPE html>
<html>
  <head>
    <title>Change h2 tags color to purple</title>
  </head>
  <body>
    <h2>Heading 1</h2>
    <h2>Heading 2</h2>
    <h2>Heading 3</h2>

    <script>
      const h2Tags = document.getElementsByTagName("h2");
      for (let i = 0; i < h2Tags.length; i++) {
        h2Tags[i].style.color = "purple";
      }
    </script>
  </body>
</html>

8. Create a new <h4> tag on the screen using JS DOM.
A=<!DOCTYPE html>
<html>
  <head>
    <title>Creating an H4 tag using JS DOM</title>
  </head>
  <body>
    <div id="container"></div>
    <script>
      // Get a reference to the container div
      const container = document.getElementById("container");

      // Create a new h4 tag
      const h4Tag = document.createElement("h4");

      // Set the text of the h4 tag
      const h4Text = document.createTextNode("Hello, I am a new h4 tag!");
      h4Tag.appendChild(h4Text);

      // Add the h4 tag to the container div
      container.appendChild(h4Tag);
    </script>
  </body>
</html>

9. Remove an element from the screen using js dom.
A=const element = document.getElementById("para");
element.remove();

10. Get the number of <p> tags on the screen using JS DOM.
A=const numOfPTags = document.getElementsByTagName('p').length;
console.log(numOfPTags); // will log the number of <p> tags on the screen

11. Fetch the value of name from the following form.
﻿
<!DOCTYPE html> <html><head>
<meta charset=utf-8 />
</head><body>
<form id="form1"
onsubmit="getFormvalue()">
Name: <input type="text" id="name"><br> <button type="submit">Submit</button>
</form>
</body> </html>

A=<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Form Example</title>
</head>
<body>
  <form id="form1" onsubmit="getFormValue()">
    Name: <input type="text" id="name"><br>
    <button type="submit">Submit</button>
  </form>
  
  <script>
    function getFormValue() {
      const nameValue = document.getElementById("name").value;
      console.log(nameValue);
      return false;
    }
  </script>
</body>
</html>
