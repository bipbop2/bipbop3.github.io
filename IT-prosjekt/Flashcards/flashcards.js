const flashcards = document.querySelectorAll('.flashcard');

// bruker arrow function fordi jeg kun trenger å bruke denne koden en gang
flashcards.forEach(flashcard => { // "for each" ittererer gjennom hvert element i nodelisten med klasse flashcards
  flashcard.addEventListener('click', () => {  //legger til en eventlistener, når den klikkes utføres funksjonen
    flashcard.classList.toggle('clicked'); //gir flashcards klassen clicked om den ikke har den, og flerner klassen om den har den
  });
});








/*
koden for funksjonen om jeg hadde brukt en vanlig funksjon:

function turnFlashcards() {
  const flashcards = document.querySelectorAll('.flashcard');

  flashcards.forEach(function(flashcard) {
    flashcard.addEventListener('click', function() {
      flashcard.classList.toggle('clicked');
    });
  });
}

toggleClickedClass();
*/