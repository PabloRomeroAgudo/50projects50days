const insert = document.querySelector('#insert')

// Why keydown and not keypress? -> https://stackoverflow.com/questions/3883543/how-can-i-deal-with-different-keycodes-on-different-browsers
// Better -> https://stackoverflow.com/questions/11030532/keypress-and-keyup-why-is-the-keycode-different
/* https://unixpapa.com/js/key.html
  For nearly all modern browsers, both keydown and keyup events are triggered by modifier keys,
  but keypress events are not. This is consistant with their being "key" events not "character" events.
*/
document.addEventListener('keydown', (event) => {
  insert.innerHTML = `
    <small>event.key</small>
    <small>event.code</small>
    <small>event.keyCode</small>
    <div class="key">${event.key !== ' ' ? event.key : 'space'}</div>
    <div class="key">${event.keyCode}</div>
    <div class="key">${event.code}</div>
  `
})

/* His way
document.addEventListener('keypress', (event) => {
  insert.innerHTML = `
    <div class="key">
      ${event.key}
      <small>event.key</small>
    </div>

    <div class="key">
      ${event.keyCode}
      <small>event.code</small>
    </div>

    <div class="key">
      ${event.code}
      <small>event.keyCode</small>
    </div>
  `
})
*/
