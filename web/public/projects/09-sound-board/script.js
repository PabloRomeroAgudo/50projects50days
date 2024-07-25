const textos = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const audios = document.querySelectorAll('audio')

textos.forEach(texto => {
  const button = document.createElement('button')
  button.innerText = texto

  button.addEventListener('click', () => {
    const audioToPlay = document.querySelector(`#${texto}`)
    audios.forEach(audio => {
      audio.pause()
      audio.currentTime = 0
    })
    audioToPlay.play()
  })

  document.body.appendChild(button)
})
