window.onload = () => {
  const repos = [
    {
      name: 'stats preview',
      url: 'https://rmzvr.github.io/stats-preview-card/',
      image: '/images/1.png',
    },
    {
      name: 'sunnyside agency',
      url: 'https://rmzvr.github.io/sunnyside-agency-landing-page/',
      image: '/images/2.png',
    },
    {
      name: 'calculator app',
      url: 'https://rmzvr.github.io/calculator-app/',
      image: '/images/4.png',
    },
    {
      name: 'faq accordion',
      url: 'https://rmzvr.github.io/faq-accordion-card/',
      image: '/images/3.png',
    },
    {
      name: 'url shortening',
      url: 'https://rmzvr.github.io/url-shortening-api/',
      image: '/images/5.png',
    },
    {
      name: 'todo app',
      url: 'https://rmzvr.github.io/todo-app/',
      image: '/images/7.png',
    },
    {
      name: 'interactive comments',
      url: 'https://rmzvr.github.io/interactive-comments-section/',
      image: '/images/6.png',
    },
    {
      name: 'Planet facts',
      url: 'https://rmzvr.github.io/planets-fact/',
      image: '/images/10.png',
    },
    {
      name: 'officelite landing',
      url: 'https://rmzvr.github.io/officelite-coming-soon-site/',
      image: '/images/8.png',
    },
    {
      name: 'Rock, paper, scissors game',
      url: 'https://rmzvr.github.io/rock-paper-scissors-game/',
      image: '/images/11.png',
    },
    {
      name: 'Random landing',
      url: 'https://rmzvr.github.io/frontend-science/',
      image: '/images/9.png',
    },
  ]

  createGrid()
  fillContent(repos)
  fillProject()
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

function fillProject() {
  const row = 3

  const projects = [
    { row: row, letter: 'P' },
    { row: row, letter: 'R' },
    { row: row, letter: 'O' },
    { row: row, letter: 'J' },
    { row: row, letter: 'E' },
    { row: row, letter: 'C' },
    { row: row, letter: 'T' },
    { row: row, letter: 'S' },
  ]

  const social = [
    { row: row + 3, letter: 'S' },
    { row: row + 3, letter: 'O' },
    { row: row + 3, letter: 'C' },
    { row: row + 3, letter: 'I' },
    { row: row + 3, letter: 'A' },
    { row: row + 3, letter: 'L' },
    { row: row + 3, letter: 'S' },
  ]

  const medias = [
    { row: row + 3, letter: 'LinkedIn' },
    { row: row + 3, letter: 'GitHub' },
    { row: row + 3, letter: 'Email' },
    { row: row + 3, letter: 'Telegram' },
    { row: row + 3, letter: 'Frontend Mentor' },
    { row: row + 3, letter: '' },
    { row: row + 3, letter: '' },
  ]

  function iterator(arr, colsCount) {
    const rows = document.querySelectorAll('.row')
    let col = colsCount

    arr.forEach((item) => {
      item.el = col++
      const currEl = rows[item.row - 1].children[item.el - 1]

      currEl.innerHTML = `<span style="font-size: 36px">${item.letter}</span>`
    })
  }

  iterator(projects, 6)
  iterator(social, 7)
  // iterator(medias, 6)
}

function fillContent(content) {
  const rows = document.querySelectorAll('.row')

  const activeElements = [
    { row: 2 + 2, el: 4 + 2 },
    { row: 2 + 2, el: 5 + 2 },
    { row: 2 + 2, el: 6 + 2 },
    { row: 2 + 2, el: 7 + 2 },
    { row: 2 + 2, el: 8 + 2 },
    { row: 2 + 2, el: 9 + 2 },
    { row: 2 + 2, el: 10 + 2 },
    { row: 3 + 2, el: 5 + 2 },
    { row: 3 + 2, el: 6 + 2 },
    { row: 3 + 2, el: 7 + 2 },
    { row: 3 + 2, el: 8 + 2 },
  ]

  activeElements.forEach((item, index) => {
    const currEl = rows[item.row - 1].children[item.el - 1]

    currEl.target = '_blank'
    currEl.classList.add('active')
    currEl.innerHTML = `
      <div>
        <span>
          ${content[index]?.name.split('-').join(' ')}
        </span>
      </div>
      `
    currEl.style.cursor = 'pointer'
    currEl.style.backgroundImage = `url(${content[index]?.image})`

    currEl.addEventListener('click', (e) => {
      if (e.target.classList.contains('open')) {
        e.target.href = content[index]?.url
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
