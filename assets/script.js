const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// elements
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const image = document.querySelector("#banner > img");
const text = document.querySelector("#banner > p");
const dots = document.getElementsByClassName('dot')

// index
let index = 0

// fonction avec les modifications à appliquer au click
function editElements(index, previousIndex) {
	image.setAttribute('src', './assets/images/slideshow/' + slides[index].image);
	text.innerHTML = slides[index].tagLine;
	dots[previousIndex].classList.remove('dot_selected');
	dots[index].classList.add('dot_selected');
  }
  
// event Listeners sur les flèches
arrowLeft.addEventListener('click', function(event) {
    event.preventDefault();
	event.stopPropagation();

	previousIndex = index
	index--
	if (index == -1) {
		index = 3
	}

	editElements(index, previousIndex)
});

arrowRight.addEventListener('click', function(event) {
    event.preventDefault();
	event.stopPropagation();

	previousIndex = index
	index++
	if (index == 4) {
		index = 0
	}

	editElements(index, previousIndex)
});