const images = document.querySelectorAll("img")

const lightbox = document.createElement("div")
lightbox.classList.add("lightbox")

const lightboxImg = document.createElement("img")

lightbox.appendChild(lightboxImg)

document.body.appendChild(lightbox)

images.forEach(image => {

image.addEventListener("click", () => {

lightbox.style.display = "flex"
lightboxImg.src = image.src

})

})

lightbox.addEventListener("click", () => {

lightbox.style.display = "none"

})