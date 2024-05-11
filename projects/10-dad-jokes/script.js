const API = 'https://icanhazdadjoke.com'

const ourJoke = document.querySelector('.joke')
const jokeBtn = document.querySelector('.btn')

const getJoke = async () => {
  return fetch(API, {
    headers: {
      Accept: 'application/json'
    }
  }).then(res => res.json())
}

const setJoke = () => {
  getJoke().then(res => {
    if (res.status === 200) {
      ourJoke.innerHTML = res.joke
    } else {
      ourJoke.innerHTML = 'Something went wrong'
    }
  })
}

setJoke()

jokeBtn.addEventListener('click', setJoke)

// response example:
// {id: '1DQZvcFBdib', joke: "To be Frank, I'd have to change my name.", status: 200}
