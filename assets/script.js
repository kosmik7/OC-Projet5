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

// Event Listeners sur les flèches
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

arrowLeft.addEventListener('click', function(event) {
    event.preventDefault();
	event.stopPropagation();
	console.log('click a gauche')
});

arrowRight.addEventListener('click', function(event) {
    event.preventDefault();
	event.stopPropagation();
	console.log('click a droite')
});