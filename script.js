const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')

const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')
const stopwatch = document.querySelector('.stopwatch')

const infoBtn = document.querySelector('.fa-question')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')

const colorBrush = document.querySelector('.fa-paint-brush');
const colorsPalette = document.querySelector('.colors')
const colorPink = document.querySelector('.color--pink')
const colorBlue = document.querySelector('.color--blue')
const colorYellow = document.querySelector('.color--yellow')
let root = document.documentElement;

let countTime;
let minutes = 0;
let seconds = 0;

let timesArr = [];

const handleStart = () => {
    clearInterval(countTime)

    countTime = setInterval(() => {

        if (seconds < 9) {
            seconds++
            stopwatch.textContent = `${minutes}:0${seconds}`
        } else if (seconds >= 9 && seconds < 59) {
            seconds++
            stopwatch.textContent = `${minutes}:${seconds}`
        } else {
            minutes++;
            seconds = 0;
            stopwatch.textContent = `${minutes}:00`
        }
    }, 1000)
}

const handlePause = () => {
    clearInterval(countTime)
}

const handleStop = () => {

    time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`

    if (stopwatch.textContent !== `0:00`) {
        time.style.visibility = 'visible'
        timesArr.push(stopwatch.textContent)
        console.log(timesArr)
    }

    clearStuff()
}

const handleReset = () => {
    time.style.visibility = 'hidden'
    timesArr = [];
    clearStuff()
}

const clearStuff = () => {
    clearInterval(countTime);
    stopwatch.textContent = `0:00`;
    timeList.textContent = ``;
    seconds = 0;
    minutes = 0;
}

const showHistory = () => {
    timeList.textContent = ``;

    let timeNumber = 1;

    timesArr.forEach(time => {
        const newTime = document.createElement('li');
        newTime.innerHTML = `Pomiar nr ${timeNumber}: <span>${time}</span>`

        timeList.append(newTime)
        timeNumber++
    })
}

const showModal = () => {
    if (!(modalShadow.style.display === 'block')) {
        modalShadow.style.display = 'block'
    } else {
        modalShadow.style.display = 'none'
    }

    modalShadow.classList.toggle('modal-animation')
}

const showColors = () => {
    colorsPalette.classList.toggle('colors-visible')
}

startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReset)
historyBtn.addEventListener('click', showHistory)

infoBtn.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', showModal)
window.addEventListener('click', e => e.target === modalShadow ? showModal() : false)

colorBrush.addEventListener('click', showColors);

colorPink.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(241, 124, 231)');
    root.style.setProperty('--hover-color', 'rgb(179 62 169)');
});

colorBlue.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(124, 155, 241)');
    root.style.setProperty('--hover-color', 'rgb(74 107 201)');
});

colorYellow.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(203 227 116)');
    root.style.setProperty('--hover-color', 'rgb(148 173 60)');
});