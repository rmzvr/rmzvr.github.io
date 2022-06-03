window.onload = () => {
  const content1 = [
    {
      name: 'stats preview',
      url: 'https://rmzvr.github.io/stats-preview-card/',
      image: '/images/1.png'
    },
    {
      name: 'sunnyside agency',
      url: 'https://rmzvr.github.io/sunnyside-agency-landing-page/',
      image: '/images/2.png'
    },
    {
      name: 'calculator app',
      url: 'https://rmzvr.github.io/calculator-app/',
      image: '/images/4.png'
    },
    {
      name: 'faq accordion',
      url: 'https://rmzvr.github.io/faq-accordion-card/',
      image: '/images/3.png'
    },
    {
      name: 'url shortening',
      url: 'https://rmzvr.github.io/url-shortening-api/',
      image: '/images/5.png'
    },
    {
      name: 'todo app',
      url: 'https://rmzvr.github.io/todo-app/',
      image: '/images/7.png'
    },
    {
      name: 'interactive comments',
      url: 'https://rmzvr.github.io/interactive-comments-section/',
      image: '/images/6.png'
    }
  ]

  const content2 = [
    {
      name: 'Planet facts',
      url: 'https://rmzvr.github.io/planets-fact/',
      image: '/images/10.png'
    },
    {
      name: 'officelite landing',
      url: 'https://rmzvr.github.io/officelite-coming-soon-site/',
      image: '/images/8.png'
    },
    {
      name: 'Rock, paper, scissors game',
      url: 'https://rmzvr.github.io/rock-paper-scissors-game/',
      image: '/images/11.png'
    },
    {
      name: 'Random landing',
      url: 'https://rmzvr.github.io/frontend-science/',
      image: '/images/9.png'
    }
  ]

  const socials = [
    {
      url: 'https://www.linkedin.com/in/rmzvr/',
      image: '/images/linkedin.svg'
    },
    {
      url: 'https://github.com/rmzvr',
      image: '/images/github.svg'
    },
    {
      url: 'https://t.me/rmzvr/',
      image: '/images/telegram.svg'
    },
    {
      url: 'https://join.skype.com/invite/IT8NGMAUZXDb',
      image: '/images/skype.svg'
    },
    {
      url: 'mailto:rmzvr@proton.me',
      image: '/images/protonmail.svg'
    },
    {
      url: '/docs/Roman_Zvir_Resume.pdf',
      image: '/images/resume2.png'
    }
  ]

  createGrid()
  const rows = document.querySelectorAll('.row')

  let initialCell = Math.round(
    (rows[0].children.length - 'projects'.length) / 2
  )

  fillText(3, initialCell, 'projects')
  fillContent(3, initialCell, content1)
  fillContent(4, initialCell + 1, content2)

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
      <a href="${content[index].url}" target="_blank" style="width: 100%;height: 100%;display: grid;place-content: center;"">
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
