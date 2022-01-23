import createBareBones from "./home";
import { contactPage } from "./contact";
import { menuPage } from "./menu";

const website = (() => {
    const content = document.getElementById('content');

    const clear = () => {
        while (content.childNodes.length > 1){
            content.removeChild(content.lastChild);
        }
    }

    const home = document.createElement('button');
    home.innerText = 'Home'
    home.addEventListener('click', () => {
        clear()
        const text = "We are the BEST restaurant in the whole region.\n We have water, restrooms, 1 server, 1 bartender, one choice of food, and one choice of drink \n--- All in different serving sizes. ---\n Thanks. BahBye";
        createBareBones('Mister\'s restaurant', "images/food.jpg", 'picture of food', text)
    })

    const menu = document.createElement('button');
    menu.innerText = 'Menu'
    menu.addEventListener('click', () => {
        clear();
        menuPage();
    })

    const contactUs = document.createElement('button');
    contactUs.innerText = "Contact"
    contactUs.addEventListener('click', () => {
        clear();
        contactPage();
    })

    const header = document.createElement('div')
    header.id = 'header'
    header.append(home, menu, contactUs);
    content.append(header);
})();