const button = document.querySelector('button')
const input = document.querySelector('input')
let open = false

button.addEventListener('click', () => {
  open = !open

  if (open) {
    input.style.width = '200px'
    input.style.paddingLeft = '10px'
  } else {
    input.style.width = '0px'
    input.style.paddingLeft = '0px'
  }
})
