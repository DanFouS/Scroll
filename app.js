// date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// Close Links
const navToggle = document.querySelector(".navToggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  //   console.log(containerHeight);
  const linksHeight = links.getBoundingClientRect().height;
  //   console.log(linksheight);
  if ((containerHeight = 0)) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// Fixed Navbar

// Smooth scroll

// Select links
