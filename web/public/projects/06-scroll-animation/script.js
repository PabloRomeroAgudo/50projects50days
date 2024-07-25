for (let i = 0; i < 13; i++) {
  document.write(`<section class="animation-on-scroll">Content ${i + 1}</section>`)
}

const elements = document.querySelectorAll('.animation-on-scroll')

const observer = new window.IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('f')
      entry.target.classList.add('animate')
    } else {
      entry.target.classList.remove('animate')
    }
  })
}, {
})

for (let i = 0; i < elements.length; i++) {
  observer.observe(elements[i])
}
