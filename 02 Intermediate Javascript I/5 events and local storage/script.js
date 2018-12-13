//task1

window.onload = function() {

	//task2
	document.getElementById('change_heading').innerHTML = 'Hello, World!';


	//task3 When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.

	var section = document.querySelector ('section');
	section.addEventListener('mouseover', function(event) {
		var selectedColor  = document.querySelector('.selected');
		selectedColor.innerText = event.target.className;
	});


	//task 4 Create a new div element.
	let newDiv = document.createElement('div');

	//task 5 Give your new div a class of purple and style it so that it has a background color of purple. 

	newDiv.classList.add('purple');


	//Append your new div to the page to the section tag.

	section.appendChild(newDiv);
};