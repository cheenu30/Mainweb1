const nav = document.querySelector('nav');
const newNavItem = document.createElement('li');
const newNavLink = document.createElement('a');
newNavLink.href = "#";
newNavLink.textContent = "HOME";
newNavLink.textContent = "FAQ";
newNavLink.textContent = "Contact";
newNavLink.textContent = "Updates";
newNavItem.appendChild(newNavLink);

nav.appendChild(newNavItem);

let slideIndex = 0;
const slides = document.getElementsByClassName("slideshow-slide");
const captions = document.getElementsByClassName("slideshow-caption");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    captions[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  captions[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  showSlides();
}

function nextSlide() {
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  showSlides();
}

showSlides();
