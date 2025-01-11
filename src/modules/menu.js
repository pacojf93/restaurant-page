import menu1 from "../images/menu-1.jpg"
import menu2 from "../images/menu-2.jpg"
import menu3 from "../images/menu-3.jpg"
import menu4 from "../images/menu-4.jpg"
import menu5 from "../images/menu-5.jpg"
import menu6 from "../images/menu-6.jpg"

const menuContent = function () {
    const menuImages = [menu1, menu2, menu3, menu4, menu5, menu6]
    const menu = document.createElement("div")
    menu.id = "menu-content"
    menuImages.forEach(function (image, index) {
        let imageElement = document.createElement("img")
        imageElement.src = image
        imageElement.id = `menu-${index}`
        imageElement.style.width = "400px"
        menu.appendChild(imageElement)
    })
    return menu
}

export {menuContent}