import { content_row1, content_row2, socials } from './data.js'

window.onload = () => {
  createGrid()
  const rows = document.querySelectorAll('.row')

  let initialCell = Math.round(
    (rows[0].children.length - 'projects'.length) / 2
  )

  initialCell < 2 ? (initialCell = 2) : null

  fillText(3, initialCell, 'projects')
  fillContent(3, initialCell, content_row1)
  fillContent(4, initialCell + 1, content_row2)

  fillText(6, initialCell + 1, 'socials')
  fillSocials(7, initialCell + 2, socials)
}

function createGrid() {
  for (let i = 0; i < Math.round(window.innerHeight / 77 + 1); i++) {
    const row = document.createElement('div')

    row.classList.add('row')

    for (let i = 0; i < Math.round(window.innerWidth / 96 + 1); i++) {
      const hexagon = document.createElement('a')

      hexagon.classList.add('hexagon')

      row.appendChild(hexagon)
    }

    document.querySelector('.container').appendChild(row)
  }
}

function fillText(row, initialCell, text) {
  const rows = document.querySelectorAll('.row')
  const letters = text.toUpperCase().split('')

  letters.forEach((letter) => {
    const currentCell = rows[row - 1].children[initialCell - 1]

    initialCell++

    currentCell.innerHTML = `<span style="font-size: 36px">${letter}</span>`
  })
}

function fillSocials(row, initalCell, content) {
  const rows = document.querySelectorAll('.row')

  content.forEach((item, index) => {
    const currEl = rows[row - 1].children[initalCell - 1]

    initalCell++

    currEl.target = '_blank'
    currEl.style.cursor = 'pointer'
    currEl.innerHTML = `
      <a href="${content[index].url}"
      target="_blank"
      style="width: 100%; height: 100%; display: grid; place-content: center;">
        <img width="50" heigth="50" src="${content[index].image}" alt="icon">
      </a>
    `
  })
}

function fillContent(row, initalCell, content) {
  const rows = document.querySelectorAll('.row')

  content.forEach((item, index) => {
    const currEl = rows[row].children[initalCell - 1]

    initalCell++

    currEl.target = '_blank'
    currEl.classList.add('active')
    currEl.innerHTML = `
      <div>
        <span>
          ${content[index].name.split('-').join(' ')}
        </span>
      </div>
      `
    currEl.style.cursor = 'pointer'
    currEl.style.backgroundImage = `url(${content[index].image})`

    currEl.addEventListener('click', (e) => {
      if (e.target.classList.contains('open')) {
        e.target.href = content[index].url
      }

      e.target.classList.add('open')

      e.target.style.transform = 'scale(4)'
    })

    currEl.addEventListener('mouseleave', (e) => {
      e.target.style.transform = 'scale(1)'
      e.target.removeAttribute('href')
      setTimeout(() => {
        e.target.classList.remove('open')
      }, 300)
    })
  })
}
