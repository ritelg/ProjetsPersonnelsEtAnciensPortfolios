/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

let Citations = {
	citations: {
		1: {
			"text": "Si je commençais à me soucier de mon aspect, je ne serai plus moi-même.",
			"author": "Albert Einstein"
		},		
		2: {
			"text": "Quand on tombe amoureux, on négocie après coup avec soi-même, histoire de voir si on s'autorise cette absurdité.",
			"author": "Amélie Nothomb"
		},
		3: {
			"text": "Les communications établissent l’uniformité parmi les hommes en les isolant.",
			"author": "Theodor ADORNO"
		},
		4: {
			"text": "Rien n’est plus dangereux qu’une idée quand on n’a qu’une idée",
			"author": "ALAIN"
		},
		5: {
			"text": "La prison est comme une maladie incurable",
			"author": "Theodor ADORNO"
		},
		6: {
			"text": "Appelons de nos vœux la venue des sceptiques s’ils doivent éteindre le fanatisme.",
			"author": "Raymond ARON"
		},
		7: {
			"text": "Dire, c’est faire",
			"author": "John L. AUSTIN"
		},
		8: {
			"text": "C’est en termes d’obstacles qu’il faut poser le problème de la connaissance scientifique.",
			"author": "Gaston BACHELARD"
		},
		9: {
			"text": "Penser signifie aller au-delà.",
			"author": "Ernst BLOCH"
		},
		10: {
			"text": "Les Anciens n’avaient pas notre culte du livre.",
			"author": "Jorge Luis BORGES"
		},
		11: {
			"text": "La télévision appelle à la dramatisation.",
			"author": "Pierre BOURDIEU"
		},
		12: {
			"text": "Le cinéma sonore a inventé le silence.",
			"author": "Robert BRESSON"
		},
		13: {
			"text": "Chaque génération se croit vouée à refaire le monde.",
			"author": "Albert CAMUS"
		},
		14: {
			"text": "L’homme est sa propre fin. Et il est la seule fin.",
			"author": "Albert CAMUS"
		},
		15: {
			"text": "Le cinéma c’est l’écriture moderne dont l’encre est la lumière.",
			"author": "Jean COCTEAU"
		},
		16: {
			"text": "Toute histoire est une histoire contemporaine.",
			"author": "Benedetto CROCE"
		},
		17: {
			"text": "Le concept, c’est ce qui empêche la pensée d’être une simple opinion, un avis, un bavardage.",
			"author": "Gilles DELEUZE"
		},
		18: {
			"text": "La religion serait la névrose obsessionnellede l’humanité.",
			"author": "Sigmund FREUD"
		},
		19: {
			"text": "Le médium, c’est le message.",
			"author": "Marshall McLUHAN"
		},
		20: {
			"text": "Le musée est un des lieux qui donnent la plus haute idée de l’homme.",
			"author": "André MALRAUX"
		},
	},
	getCitation: function(nb) {
		return this.citations[nb];
	}
}

let generateNumber = function(myMin, myMax) {
	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

let newTweet = function(citation, autheur) {
	let url = "https://twitter.com/intent/tweet?text="+encodeURI(citation +' ' +autheur);
	window.open(url);
}

document.addEventListener('DOMContentLoaded', function() {

	
	//Initialisation des variables du DOM
	let buttonGenerer = document.querySelector(".citations-button a");
	let buttonTweet = document.querySelector(".btn-tweeter");
	let citationText = document.querySelector(".citations-text-content");
	let citationTextAuthor = document.querySelector(".citations-text-author");
	
	
	// Au chargement de la page on ecrit une citation
	let citation = Citations.getCitation(generateNumber(1, 20));
	citationText.textContent = citation.text;
	citationTextAuthor.textContent = citation.author;
	
	
	buttonGenerer.addEventListener("click", function(e) {
		e.preventDefault();
		
		//Je recupere une citation
		let citation = Citations.getCitation(generateNumber(1, 20));

		//Je l'insere dans le dom

		citationText.textContent = citation.text;
		citationTextAuthor.textContent = citation.author;
	});
	buttonTweet.addEventListener("click", function(e) {
		e.preventDefault();

		//On tweet la citation
		newTweet(citationText.textContent, citationTextAuthor.textContent);
	});
});
