const getData = () => {
  fetch('	https://api.adviceslip.com/advice')
    .then((data) => data.json())
    .then((advice) => {
      const id = document.querySelector('.id')
      const adviceData = document.querySelector('.advice')

      const idHtml = `ADIVCE #${advice.slip.id}`
      const adviceHtml = `“${advice.slip.advice}”`

      id.innerHTML = idHtml
      adviceData.innerHTML = adviceHtml
      console.log(advice)
    })
}

const button = document.querySelector('.button')
button.addEventListener('click', (e) => {
  getData()
})
