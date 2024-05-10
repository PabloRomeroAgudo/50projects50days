const bg = document.querySelector('.bg')
const text = document.querySelector('.loading-text')
// set and clear Interval -> https://developer.mozilla.org/en-US/docs/Web/API/setInterval
let load = 0

const blurring = () => {
  load++

  if (load === 100) {
    clearInterval(int)
  }

  text.innerHTML = `${load}%`
  text.style.opacity = 1 - load / 100
  bg.style.filter = `blur(${100 - load}px)`
}

const int = setInterval(blurring, 20)

// I won't use it because I didn't came up with the idea but really interesting (it is from the solution)
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// const scale = (num, in_min, in_max, out_min, out_max) => {
//  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
// }
