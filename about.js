console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Submitted Successfully!");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const compliment = (evt) => {
	evt.preventDefault();
	alert("Good Job!")
}

let image = document.querySelector('#cat');
image.addEventListener('mouseover', compliment)