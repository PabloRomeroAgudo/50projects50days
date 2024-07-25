const text = document.querySelector('#text')
const tagsDiv = document.querySelector('.choices')

text.focus()

const handleEnter = () => {
  const options = document.querySelectorAll('.option')

  const interval = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * options.length)
    options.forEach(option => {
      option.classList.remove('selected')
    })
    options[randomNumber].classList.add('selected')
  }, 50)

  setTimeout(() => {
    text.value = ''
  }, 100)

  // After 3 seconds, we stop changing the selected option
  setTimeout(() => {
    clearInterval(interval)
    const winner = document.querySelector('.selected').textContent
    const winnerText = document.querySelector('.winner')
    winnerText.innerHTML = `The winner is ${winner}`
  }, 3000)
}

const addTags = (tags) => {
  tags.forEach(tag => {
    if (tag === '') return
    const small = document.createElement('small')
    small.classList.add('option')
    small.textContent = tag
    tagsDiv.appendChild(small)
  })
}

text.addEventListener('keyup', (e) => {
  const winnerText = document.querySelector('.winner')
  winnerText.innerHTML = ''
  if (e.key === 'Enter') {
    handleEnter()
    return
  }
  tagsDiv.innerHTML = ''
  const tags = text.value.split(',').filter(tag => tag !== '').map(tag => tag.trim())
  addTags(tags)
})
