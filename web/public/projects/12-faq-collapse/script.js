const buttons = document.querySelectorAll('.faq-toggle')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const detail = button.parentElement.parentElement
    detail.open = !detail.open
    console.log(detail.open)
  })
})
