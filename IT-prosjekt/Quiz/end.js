const username = document.querySelector('#username')
const saveScore = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || [] //JSON.parse gjør det om til et JavaScript objekt
const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () =>{
    saveScoreBtn.disabled = !username.value //kan kun skrive inn score dersom man har skrevet inn i input feltet
})

saveHighScore = e => {
    e.preventDefault() //forhindrer at man blir sendt videre førkoden nedenfor er gjennomført
    
    const score = {  //lager et objekt med både brukernavn og score
        score: mostRecentScore,
        name: username.value,
    }

    highScores.push(score)

    highScores.sort((a,b) => { //bruker sort() metoden til å sammenlignescore til to objekter, slik at de kan bli satt i tiktig rekkefølge
        return b.score - a.score //om resultatet er negativt kommer b før a 
    })

    highScores.splice(5) //fjerner objekter i highscore arrayet etter 5

    localStorage.setItem('highScores', JSON.stringify(highScores)) //highscore arrayet lagres under highScores
    window.location.assign('highscore.html') //bruker sendes til highscores.html
}
