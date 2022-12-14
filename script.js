const getData = () => {
  fetch('	https://api.adviceslip.com/advice')
    .then((data) => data.json())
    .then((advice) => {
      const id = document.querySelector('.id')
      const adviceData = document.querySelector('.advice')

      const idHtml = `ADVICE #${advice.slip.id}`
      const adviceHtml = `“${advice.slip.advice}”`

      id.innerHTML = idHtml
      adviceData.innerHTML = adviceHtml
      animation()
    })
}
const container = document.getElementById('adivce-container')
const animation = () => {
  container.style.animation = 'fadeIn 2s'
}

const button = document.querySelector('.button-dice')
button.addEventListener('click', (e) => {
  getData()
  container.style.animation = ''
})
