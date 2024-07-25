const handleClick = (element) => {
  if (element.classList.contains('active')) return

  divs.forEach(elemento => {
    if (elemento !== element) {
      elemento.classList.remove('active')
    } else {
      element.classList.add('active')
    }
  })
}

const divs = document.querySelectorAll('.panel')

divs.forEach(element => {
  element.addEventListener('click', () => handleClick(element))
})
