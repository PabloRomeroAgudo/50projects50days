const drinks = document.querySelectorAll('.cup')
const fill = document.querySelector('.fill')
const info = document.querySelector('.info')

let litersLeft = 2
drinks.forEach((drink, index) => {
  drink.addEventListener('click', () => {
    const remaining = document.querySelector('#remaining')
    if (drink.classList.contains('full')) {
      if (index === drinks.length - 1 || !drinks[index + 1].classList.contains('full')) {
        litersLeft += 0.250
        drink.classList.remove('full')
      }
    } else {
      litersLeft -= 0.250
      drink.classList.add('full')
    }

    browseDrinks(index)
    const percentage = calculatePercentage(litersLeft)
    fill.innerHTML = percentage <= 0 ? '' : `${percentage}%`
    fill.style.height = `${percentage}%`
    info.style.height = `${100 - percentage}%`
    remaining.textContent = `${litersLeft}L`
  })
})

const calculatePercentage = (litersLeft) => {
  // 100 / 2 = x / 2 - littersLeft; x = 100 * (2 - littersLeft) / 2
  return 50 * (2 - litersLeft)
}

const browseDrinks = (index) => {
  for (let i = 0; i < drinks.length; i++) {
    if (i < index) {
      if (!drinks[i].classList.contains('full')) {
        drinks[i].classList.add('full')
        litersLeft -= 0.250
      }
    } else if (i > index) {
      if (drinks[i].classList.contains('full')) {
        drinks[i].classList.remove('full')
        litersLeft += 0.250
      }
    }
  }
}
