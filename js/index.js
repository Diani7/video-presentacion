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
$backward.addEventListener('click',handleBackward)
$forward.addEventListener('click',handleForward)

function handleBackward() {
    //$video.currentTime = $video.currentTime - 10
    $video.currentTime -= 10
    //console.log('para retroceder 10 segundos')
}

function handleForward() {
    $video.currentTime = $video.currentTime + 10
    //console.log('para adelantar 10 segundos')
}

const $progress =document.querySelector('#progress')
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