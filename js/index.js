//Declarando mis variables
const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');

//Agregando los eventos que necesito para el clic play y pausa
$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

//Creando las funciones que necesito para pasar como segúndo parametro en mis eventos
//Esta función va a obedecer cuando se escuche al evento de click(línea25)
function handlePlay() {
    $video.play() //llamo mi elemento video y le agrego el metodo play
    $play.hidden = true//el hidden significa oculto, el true o false me permite que cuando un botón este oculto me muestre el que no lo esta
    $pause.hidden = false
    //console.log('le diste click al botón play')//metodo implementado ya dentro del navegador
}

function handlePause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    //console.log('le diste click al botón pausa')
}

//Agregando los eventos que necesito para el clic retroceder y adelantar
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

function handleBackward() {
    //$video.currentTime = $video.currentTime - 10
    $video.currentTime -= 10
    //console.log('para retroceder 10 segundos')
}

function handleForward() {
    $video.currentTime = $video.currentTime + 10
    //console.log('para adelantar 10 segundos')
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeupdate)

function handleLoaded() {
    $progress.max = $video.duration
    //console.log('ha cargado mi video', $video.duration);
}

function handleTimeupdate() {
    $progress.value = $video.currentTime
    //console.log('tiempo actual', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value
    //console.log($progress.value)
}

let $reset = document.querySelector('#reset');
$reset.addEventListener('click', handleReset)

function handleReset() {
    $reset = $video.duration
    $video.currentTime = $video.currentTime - $reset
    clickCounter = 1;
    $video.playbackRate = 1;
    //console.log($video.duration)
}

function setSeconds(sec) {
    $video.currentTime = sec
}

let $setSeconds = document.querySelector('#set-seconds');
$setSeconds.addEventListener('click', handleSeconds)

function handleSeconds() {
    let seconds = prompt('enter the time seconds');
    if (seconds>0) {
        if ($video.duration >= seconds) {
            setSeconds(seconds);
        }else{
            alert ('the value cannot be more than the video length');
        }
    }else if(seconds<0){
        alert ('the value cannot be less than zero (0)');
    }else{
        alert('Enter a number in seconds');
    }
}

let $speed = document.querySelector('#speed');
let clickCounter = 1;
$speed.addEventListener('click', handleSpeed)

function handleSpeed() {
    clickCounter = clickCounter + 0.5;
    $video.playbackRate = clickCounter;
}

let $videoSizerM = document.querySelector('#sizer-medio')
$videoSizerM.addEventListener('click', handlesizeMed)

function handlesizeMed(){
    $video.height= 450;
    $video.width = 800;
}

let $videoSizer = document.querySelector('#sizer-pequeño')
$videoSizer.addEventListener('click', handleSizeSmall)

function handleSizeSmall(){
    $video.height= 270;
    $video.width = 630;
 
}

let $videoSizerL = document.querySelector('#sizer-grande')
$videoSizerL.addEventListener('click', handlesizeLarge)

function handlesizeLarge(){
    $video.height= 500;
    $video.width = 850;
}

let $videoSizerXl = document.querySelector('#sizer-xgrande')
$videoSizerXl.addEventListener('click', handlesizeXlarge)

function handlesizeXlarge(){
    $video.height= 600;
    $video.width = 900;
}