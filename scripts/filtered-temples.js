const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "https://churchofjesuschrist.org/img/salt-lake-temple.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 41010,
    imageUrl: "https://churchofjesuschrist.org/img/rome-temple.jpg"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: "1919-11-27",
    area: 42300,
    imageUrl: "https://churchofjesuschrist.org/img/laie-temple.jpg"
  },
  // 3 user-added temples
  {
    name: "Quito Ecuador Temple",
    location: "Quito, Ecuador",
    dedicated: "2022-11-20",
    area: 39500,
    imageUrl: "https://churchofjesuschrist.org/img/quito-temple.jpg"
  },
  {
    name: "Stockholm Sweden Temple",
    location: "Stockholm, Sweden",
    dedicated: "1985-07-02",
    area: 17200,
    imageUrl: "https://churchofjesuschrist.org/img/stockholm-temple.jpg"
  },
  {
    name: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "https://churchofjesuschrist.org/img/paris-temple.jpg"
  }
];

function createCard(temple) {
  return `
    <section class="card" tabindex="0">
      <h2>${temple.name}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${new Date(temple.dedicated).toLocaleDateString()}</p>
      <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="Photo of ${temple.name}" loading="lazy" />
    </section>
  `;
}

function renderTemples(filteredTemples) {
  document.getElementById("temple-cards").innerHTML = filteredTemples.map(createCard).join("");
  setActiveLink();
}

function filterTemples(criteria) {
  let result = temples;
  if (criteria === "old") result = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
  else if (criteria === "new") result = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
  else if (criteria === "large") result = temples.filter(t => t.area > 90000);
  else if (criteria === "small") result = temples.filter(t => t.area < 10000);
  renderTemples(result);
}

function setActiveLink() {
  const links = document.querySelectorAll("nav a");
  links.forEach(link => link.classList.remove("active"));
  // Find the link matching the last filter used (stored in data attribute or URL hash)
  const activeFilter = document.querySelector("nav a.active") || document.querySelector("nav a[data-filter='all']");
  if (!activeFilter) links[0].classList.add("active");
}

// Attach event listeners for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = link.getAttribute("data-filter");
    filterTemples(filter);
    // Add active class to clicked link
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    link.classList.add("active");
  });
});

// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("name").textContent = "Your Full Name";

// Initial render
renderTemples(temples);
document.querySelector("nav a[data-filter='all']").classList.add("active");
