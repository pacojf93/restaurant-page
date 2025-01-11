import homeImage from "../images/home.jpg"

const homeContent = function () {
    const home = document.createElement("div")
    home.id = "home-content"

    const title = document.createElement("h1")
    title.textContent = "A Mock-up Sushi Place"
    home.appendChild(title)

    const image = document.createElement("img")
    image.src = homeImage
    image.id = "home-image"
    image.style.height = "75vh"
    home.appendChild(image)
    
    return home
} 

export {homeContent}