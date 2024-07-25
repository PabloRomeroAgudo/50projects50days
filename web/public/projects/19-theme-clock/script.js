const button = document.querySelector('button')

const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')

const time = document.querySelector('.time')
const info = document.querySelector('.date')

const root = document.querySelector(':root')

let darkMode = false

const setTime = (date) => {
  time.innerHTML = `${date.toLocaleString('en-EN',
  {
    hour: 'numeric',
    minute: 'numeric'

  }).split(' ')[0]} PM`
}

const setInfo = (date) => {
  info.innerHTML = `${date.toLocaleDateString('en-EN', { weekday: 'long' })}, ${date.toLocaleDateString('en-EN', { month: 'long' })}
  <span class="day-number">${date.toLocaleDateString('en-EN', { day: 'numeric' })}</span>`
}

const setRotations = (date) => {
  hour.style.transform = `translate(-50%, -100%) rotate(${(date.getHours() * 30) + (date.getMinutes() * 0.5)}deg)`
  minute.style.transform = `translate(-50%, -100%) rotate(${(date.getMinutes() * 6)}deg)`
  second.style.transform = `translate(-50%, -100%) rotate(${(date.getSeconds() * 6)}deg)`
}

const getTime = () => {
  const date = new Date()
  setTime(date)
  setInfo(date)
  setRotations(date)
}

button.addEventListener('click', () => {
  if (darkMode) {
    root.style.setProperty('--primary-color', '#000')
    root.style.setProperty('--secondary-color', '#fff')
  } else {
    root.style.setProperty('--primary-color', '#fff')
    root.style.setProperty('--secondary-color', '#000')
  }
  darkMode = !darkMode
})

setInterval(() => {
  getTime()
}, 1000)
