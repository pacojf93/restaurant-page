import "./styles.css"
import { homeContent } from "./modules/home"
import { menuContent } from "./modules/menu"
import { aboutContent } from "./modules/about"

document.querySelector("#content").appendChild(homeContent())

document.addEventListener("click", function (event) {   
    switch(event.target.id){
        case "home-button":
            Array.from(document.querySelectorAll("#content > *")).forEach(child => child.remove())
            document.querySelector("#content").appendChild(homeContent())
            break
        case "menu-button":
            Array.from(document.querySelectorAll("#content > *")).forEach(child => child.remove())
            document.querySelector("#content").appendChild(menuContent())
            break
        case "about-button":
            Array.from(document.querySelectorAll("#content > *")).forEach(child => child.remove())
            document.querySelector("#content").appendChild(aboutContent())
            break
    }
})
