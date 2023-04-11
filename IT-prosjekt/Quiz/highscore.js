//henter elementer
const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML =   //setter innholdet i highScoresList
highScores.map(score=> { //kaller en funksjon på hvert element i arrayet
    return `<li class="highScore">${score.name} - ${score.score}</li>` //returnerer HTML-string med navn og poengsum
}).join('') //kombinere alle de individuelle HTML-strengene til en enkelt streng uten separator mellom dem

/* localStorage.clear(); */