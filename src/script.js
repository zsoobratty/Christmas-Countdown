const daysElement = document.getElementById("days")
const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')


console.log(daysElement, hoursElement, minutesElement, secondsElement)
const christmasDay = '25 Dec 2020'

const countdown = () => {
    const christmasDate = new Date(christmasDay)
    const currentDate = new Date()
    const timeUntilChristmas = christmasDate - currentDate

    const totalSeconds = Math.floor(timeUntilChristmas / 1000)
    const days = Math.floor(totalSeconds / 86400)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds % 60)

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
}

setInterval(() => {
    countdown()
}, 1000);