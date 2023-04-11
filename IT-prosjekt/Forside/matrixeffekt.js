const canvas = document.getElementById('matrix')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン'
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ'
const numbers = '0123456789'

const alphabet = katakana + latin + numbers
const fontSize = 16
const colums = canvas.width/fontSize

const rainDrops = [];

for(let x=0; x < colums; x++){
    /* rainDrops[x] = 1 */
    rainDrops.push(Math.ceil(canvas.height/fontSize))
}

const draw = () =>{
    context.fillStyle= 'rgba(0, 0, 0, 0.05)'
    context.fillRect(0, 0, canvas.width, canvas.height)

    context.fillStyle = '#0F0'
    context.font = fontSize + 'px monospace' 

    for(let i=0; i < rainDrops.length; i++){
        const text = alphabet.charAt(Math.floor(Math.random()*alphabet.length))
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize)

        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
            rainDrops[i]=0
        }
        rainDrops[i]++
    }
}

setInterval(draw, 30)


//Legger til en eventlistener og funksjon slik at nettsiden oppdateres når størrelsen på skjermen endres
window.addEventListener('resize', lastInn)

function lastInn(){
    window.location.reload()
}