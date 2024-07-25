const parragraph = document.querySelectorAll('p')
const lines = document.querySelectorAll('.line')
const prevButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')

let active = 1

const update = () => {
  parragraph.forEach((p, i) => {
    if (i < active) {
      p.classList.add('pactive')
    } else {
      p.classList.remove('pactive')
    }
  })

  lines.forEach((line, i) => {
    if (i < active - 1) {
      line.classList.add('lineactive')
    } else {
      line.classList.remove('lineactive')
    }
  })

  if (active === 1) {
    prevButton.classList.remove('bactive')
  } else if (active === parragraph.length) {
    nextButton.classList.remove('bactive')
  } else {
    prevButton.classList.add('bactive')
    nextButton.classList.add('bactive')
  }
}

prevButton.addEventListener('click', () => {
  active--

  if (active < 1) {
    active = 1
  }

  update()
})

nextButton.addEventListener('click', () => {
  active++

  if (active > parragraph.length) {
    active = parragraph.length
  }

  update()
})
