//henter elementer
const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choiceText'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let available = ''


//lager et array med alle spørsmålene
let questions = [
    {
        question: 'Hvilke tall baserer det binære tallsystemet seg på?',
        choice1: '2 og 0',
        choice2: '0 og 1',
        choice3: '1 og 10',
        choice4: '2 og 4',
        answer: 2,
    },
    {
        question: 'Hvilken farge gir følgende kode: rgb(0,0,70)?',
        choice1: 'mørkeblå',
        choice2: 'mørkegrønn',
        choice3: 'lyseblå',
        choice4: 'lysegrønn',
        answer: 1,
    },
    {
        question: 'Hvilket tall i titallsystemet tilsvarer dette binære tallet 0101?',
        choice1: '2',
        choice2: '3',
        choice3: '4',
        choice4: '5',
        answer: 4,
    },
    {
        question: 'Hva står CSS for?',
        choice1: 'Cascading Software Sheets',
        choice2: 'Cascading Super Style',
        choice3: 'Cascading Style Sheets',
        choice4: 'Coloring Style Sheets',
        answer: 3,
    },
    {
        question: 'Hilken datatype er dette: let biler = ["BMW", "Tesla", "Audi"]',
        choice1: 'objekt',
        choice2: 'array',
        choice3: 'boolean',
        choice4: 'tall',
        answer: 2,
    },
    {
        question: 'Hvordan refererer man til et stilark?',
        choice1: '<link rel="stylesheet" href="">',
        choice2: '<a href"" type="stylesheet">',
        choice3: '<src="" rel="stylesheet">',
        choice4: '<style src=""></style>',
        answer: 1,
    },
    {
        question: 'Hva er feil om lokale variabler?',
        choice1: 'De blir deklarert inni en funksjon.',
        choice2: 'Brukes for å forenkle koden inni funksjoner',
        choice3: 'De er tilgjengelige utenfor funksjonen',
        choice4: 'De er ikke tilgjengelige utenfor funksjonen',
        answer: 3,
    },
    {
        question: 'Hva betyr x===y?',
        choice1: 'x og y har ulik verdi',
        choice2: 'x og y har samme datatype',
        choice3: 'x og y har samme verdi',
        choice4: 'x og y har samme verdi og datatype',
        answer: 4,
    },
    {
        question: 'Hvilket tall blir: Math.ceil(5.1)',
        choice1: '5',
        choice2: '5.5',
        choice3: '6',
        choice4: '51',
        answer: 3,
    },
    {
        question: 'Hva er riktig om en for-løkke??',
        choice1: 'Vi vet hvor mange ganger koden repeteres',
        choice2: 'Vi vet ikke hvor ofte koden repeteres',
        choice3: 'For-løkker er det samme som while-løkker',
        choice4: 'For løkker er det samme som if-setninger',
        answer: 1,
    },
]

//definerer antall poeng for hvert riktig svar og antall spørsmål
const SCORE_POINTS = 100
const MAX_QUESTIONS = 10


function startGame (){
    questionCounter = 0
    score = 0
    availableQuestions = [...questions] //setter questions arrayet inn i arrayet med availeble questions
    getNewQuestion() //funksjonskall
}


function getNewQuestion (){
    //skjekker om det er flere spørsmål igjen
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) { //om det ikke er flere spørsmål igjen:
        localStorage.setItem('mostRecentScore', score) //lagrer score i localStorage
        return window.location.assign('end.html') //sender brukeren videre til sluttsiden
    }

    questionCounter++ //inkrementerer med 1
    progressText.innerText = `Question ${questionCounter} of  ${MAX_QUESTIONS}` //holder orden på hvilket spørsmål vi er på 
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%` //fyller "progress bar" i forhold til hvilket spørsmål vi er på 

    const questionsIndex = Math.floor(Math.random()*availableQuestions.length) //gir et vilkåerlig tall mellom 0 og antall spørsmål (10)
    currentQuestion = availableQuestions[questionsIndex] //henter et vilkåerlig spørsmål fra arrayet 
    question.innerText = currentQuestion.question //oppdaterer spørsmålet (.question så det henter spørsmålet og ikke svar)

    //henter svaralternativene som korresponderer med spørsmålet 
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText =currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1) //fjerner spørsmålet så det ikke stilles igjen

    acceptingAnswers = true 
}

//legger til eventlisteners til svar alternativene 
choices.forEach(choices =>{
    choices.addEventListener('click', e =>{
        if(!acceptingAnswers) return
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        //øker poengscore
        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num =>{
    score +=num
    scoreText.innerText = score
}

// gjør et funksjonskall
startGame()