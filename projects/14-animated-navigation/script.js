const nav = document.querySelector('.container')
const button = document.querySelector('.icon')

button.addEventListener('click', () => {
  nav.classList.toggle('deactive')
})
