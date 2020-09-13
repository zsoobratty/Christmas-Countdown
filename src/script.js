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


    console.log(days, hours, minutes, seconds)
}
    countdown()

// setInterval(() => {
//     countdown()
// }, 1000);