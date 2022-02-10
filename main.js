window.onload = () => {
  const repos = [
    {
      name: "stats preview",
      url: "https://rzvr.github.io/stats-preview-card/",
      image:
        "https://raw.githubusercontent.com/rzvr/stats-preview-card/main/done/desktop.png",
    },
    {
      name: "sunnyside agency landing",
      url: "https://rzvr.github.io/sunnyside-agency-landing-page/",
      image:
        "https://raw.githubusercontent.com/rzvr/sunnyside-agency-landing-page/main/screenshots/desktop.png",
    },
    {
      name: "faq accordion card",
      url: "https://rzvr.github.io/faq-accordion-card/",
      image:
        "https://raw.githubusercontent.com/rzvr/faq-accordion-card/main/assets/screenshots/desktop.png",
    },
    {
      name: "calculator app",
      url: "https://rzvr.github.io/calculator-app/",
      image:
        "https://raw.githubusercontent.com/rzvr/calculator-app/main/screenshots/desktop-neutral-theme.png",
    },
    {
      name: "url shortening",
      url: "https://rzvr.github.io/url-shortening-api/",
      image:
        "https://raw.githubusercontent.com/rzvr/url-shortening-api/main/screenshots/desktop-large-links.png",
    },
    {
      name: "interactive comments",
      url: "https://rzvr.github.io/interactive-comments-section/",
      image:
        "https://raw.githubusercontent.com/rzvr/interactive-comments-section/main/screenshots/desktop.png",
    },
    {
      name: "todo app",
      url: "https://rzvr.github.io/todo-app/",
      image:
        "https://raw.githubusercontent.com/rzvr/todo-app/master/screenshots/desktop-dark-all.png",
    },
    {
      name: "officelite coming soon",
      url: "https://rzvr.github.io/officelite-coming-soon-site/",
      image:
        "https://raw.githubusercontent.com/rzvr/officelite-coming-soon-site/main/src/images/screenshots/home-desktop.png",
    },
    {
      name: "Random landing",
      url: "https://rzvr.github.io/site/",
      image:
        "https://raw.githubusercontent.com/rzvr/site/main/Screenshot%202022-02-10%20at%2011-20-54%20Front-end%20Science.png",
    },
  ];

  createGrid();
  fillContent(repos);
  fillText();
};

function createGrid() {
  for (let i = 0; i < Math.round(window.innerHeight / 77 + 1); i++) {
    const row = document.createElement("div");

    row.classList.add("row");

    for (let i = 0; i < Math.round(window.innerWidth / 96 + 1); i++) {
      const hexagon = document.createElement("a");

      hexagon.classList.add("hexagon");

      row.appendChild(hexagon);
    }

    document.querySelector(".container").appendChild(row);
  }
}

function fillText() {
  const rows = document.querySelectorAll(".row");

  const row = Math.round(window.innerHeight / 77) - 4;
  let col = 4;

  const letters = [
    { row: row, el: 5, letter: "P" },
    { row: row, el: 6, letter: "R" },
    { row: row, el: 7, letter: "O" },
    { row: row, el: 8, letter: "J" },
    { row: row, el: 9, letter: "E" },
    { row: row, el: 10, letter: "C" },
    { row: row, el: 11, letter: "T" },
    { row: row, el: 12, letter: "S" },
  ];

  letters.forEach((item) => {
    item.el = col++;
  });

  letters.forEach((item) => {
    const currEl = rows[item.row - 1].children[item.el - 1];

    currEl.innerHTML = `<div><span style="font-size: 36px">${item.letter}</span></div>`;
  });
}

function fillContent(content) {
  const rows = document.querySelectorAll(".row");

  const row = Math.round(window.innerHeight / 77) - 3;
  let col = 4;

  const activeElements = [
    { row: row, el: 4 },
    { row: row, el: 5 },
    { row: row, el: 6 },
    { row: row, el: 7 },
    { row: row, el: 8 },
    { row: row, el: 9 },
    { row: row, el: 10 },
    { row: row, el: 11 },
    { row: row, el: 12 },
  ];

  activeElements.forEach((item) => {
    item.el = col++;
  });

  activeElements.forEach((item, index) => {
    const currEl = rows[item.row - 1].children[item.el - 1];

    currEl.target = "_blank";
    currEl.classList.add("active");
    currEl.innerHTML = `<div><span>${content[index]?.name
      .split("-")
      .join(" ")}</span></div>`;
    currEl.style.cursor = "pointer";

    currEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("open")) {
        e.target.href = content[index]?.url;
      }

      e.target.classList.add("open");
      e.target.style.transform = "scale(4)";
      e.target.style.backgroundImage = `url(${content[index]?.image})`;
    });

    currEl.addEventListener("mouseleave", (e) => {
      e.target.style.transform = "scale(1)";
      e.target.removeAttribute("href");
      setTimeout(() => {
        e.target.classList.remove("open");
        e.target.style.backgroundImage = "";
      }, 300);
    });
  });
}
