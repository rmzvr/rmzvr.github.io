window.onload = () => {
  const repos = [
    {
      name: "stats preview",
      url: "https://rzvr.github.io/stats-preview-card/",
      image: "/images/1.png",
    },
    {
      name: "sunnyside agency",
      url: "https://rzvr.github.io/sunnyside-agency-landing-page/",
      image: "/images/2.png",
    },
    {
      name: "faq accordion",
      url: "https://rzvr.github.io/faq-accordion-card/",
      image: "/images/3.png",
    },
    {
      name: "calculator app",
      url: "https://rzvr.github.io/calculator-app/",
      image: "/images/4.png",
    },
    {
      name: "url shortening",
      url: "https://rzvr.github.io/url-shortening-api/",
      image: "/images/5.png",
    },
    {
      name: "interactive comments",
      url: "https://rzvr.github.io/interactive-comments-section/",
      image: "/images/6.png",
    },
    {
      name: "todo app",
      url: "https://rzvr.github.io/todo-app/",
      image: "/images/7.png",
    },
    {
      name: "officelite landing",
      url: "https://rzvr.github.io/officelite-coming-soon-site/",
      image: "/images/8.png",
    },
    {
      name: "Random landing",
      url: "https://rzvr.github.io/site/",
      image: "/images/9.png",
    },
  ];

  createGrid();
  fillContent(repos);
  fillProject();
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

function fillProject() {
  const rows = document.querySelectorAll(".row");

  const row = 3;
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

    currEl.innerHTML = `<span style="font-size: 36px">${item.letter}</span>`;
  });
}

function fillContent(content) {
  const rows = document.querySelectorAll(".row");

  const row = 4;
  let col = 3;

  const activeElements = [
    { row },
    { row },
    { row },
    { row },
    { row },
    { row },
    { row },
    { row },
    { row },
  ];

  activeElements.forEach((item, index) => {
    item.el = col++;

    const currEl = rows[item.row - 1].children[item.el - 1];

    currEl.target = "_blank";
    currEl.classList.add("active");
    currEl.innerHTML = `
      <div>
        <span>
          ${content[index]?.name.split("-").join(" ")}
        </span>
      </div>
      `;
    currEl.style.cursor = "pointer";
    currEl.style.backgroundImage = `url(${content[index]?.image})`;

    currEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("open")) {
        e.target.href = content[index]?.url;
      }

      e.target.classList.add("open");

      e.target.style.transform = "scale(4)";
    });

    currEl.addEventListener("mouseleave", (e) => {
      e.target.style.transform = "scale(1)";
      e.target.removeAttribute("href");
      setTimeout(() => {
        e.target.classList.remove("open");
      }, 300);
    });
  });
}
