/* jshint esversion: 6 */

//PART 1 task1

window.onload = function () {

	//task2
	document.getElementById('change_heading').innerHTML = 'Hello, World!';


	//task3 When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.

	var section = document.querySelector('section');
	section.addEventListener('mouseover', function (event) {
		var selectedColor = document.querySelector('.selected');
		selectedColor.innerText = event.target.className;
	});


	//task 4 Create a new div element.
	let newDiv = document.createElement('div');

	//task 5 Give your new div a class of purple and style it so that it has a background color of purple. 

	newDiv.classList.add('purple');


	//Append your new div to the page to the section tag.

	section.appendChild(newDiv);


	//PART 2 Create a racing game with the two cars. When the race button is pressed, the two cars should move across the screen until one of them is at the end of the screen. When one of the blocks reaches the end - you should alert "winner!"

	//select the button and the cars
	var button = document.querySelector('button');
	var car1 = document.querySelector('.car1');
	var car2 = document.querySelector('.car2');
	//create 2 margin counters
	let margin1 = 0;
	let margin2 = 0;


	//add listener
	button.addEventListener("click", function (event1) {
		//set timer 
		let timerId = setInterval(function () {
			//move the 2 cars at different increments
			car1.style.marginLeft = margin1 + 'px';
			car2.style.marginLeft = margin2 + 'px';
			margin1 += 10;
			margin2 += 8;
			if (margin1 >= window.innerWidth - 50) {
				clearInterval(timerId);
				alert('1 wins the race!');
			}
		}, 100);

		
	});
	
		
	
};