import "./styles.css"
import { homeContent } from "./modules/home"
import { menuContent } from "./modules/menu"
import { aboutContent } from "./modules/about"

document.querySelector("#content").appendChild(homeContent())

document.addEventListener("click", function (event) {
    Array.from(document.querySelectorAll("#content > *")).forEach(child => child.remove())
    switch(event.target.id){
        case "home-button":
            document.querySelector("#content").appendChild(homeContent())
            break
        case "menu-button":
            document.querySelector("#content").appendChild(menuContent())
            break
        case "about-button":
            document.querySelector("#content").appendChild(aboutContent())
            break
    }
})
