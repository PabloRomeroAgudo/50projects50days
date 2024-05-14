const counters = document.querySelectorAll('.counter')

counters.forEach(async counter => {
  counter.innerText = '0'

  const target = +counter.getAttribute('data-target')

  const updateCount = () => {
    const count = +counter.innerText
    const increment = target / 200
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`
      setTimeout(updateCount, 1)
    } else {
      counter.innerText = target
    }
  }

  updateCount()
})
