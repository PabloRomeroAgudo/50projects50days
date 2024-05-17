const btn = document.querySelector('.btn')

btn.addEventListener('click', (event) => {
  const x = event.pageX
  const y = event.pageY

  const buttonTop = event.target.offsetTop
  const buttonLeft = event.target.offsetLeft

  const xInside = x - buttonLeft
  const yInside = y - buttonTop

  if (btn.children.length > 0) {
    btn.removeChild(btn.children[0])
  }

  const circle = document.createElement('div')
  circle.classList.add('circle')
  circle.style.top = yInside + 'px'
  circle.style.left = xInside + 'px'
  btn.appendChild(circle)
})
