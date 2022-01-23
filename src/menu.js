import { miniCont } from "./contact"

const menuPage = () => {
    const content = document.getElementById('content');
    const container = document.createElement('div')
    container.id = "menuContainer"
    const header = document.createElement('h1')
    header.textContent = 'This Week Menu'
    container.append(header)
    const menuItems = document.createElement('div');
    menuItems.id = 'menuItems';

    const alcDrink = miniCont('Beer', '300ml $2\n\n 500ml $2.5\n\n  1l $3', 'images/alc.jpg' )
    const mainDish = miniCont('Kuritza', '200grams $1 \n\n 300grams $1.5\n\n 500grams $2', 'images/mainDish.jpg')
    const nonAlc = miniCont('kisle', '300ml $2 \n\n 500ml $2.5\n\n  1l $3', 'images/drink.jpg')
    const dessert = miniCont('Tenbis', '100gram $2 \n\n 200gram $2.5\n\n  300grams $3', 'images/dessert.jpg')

    menuItems.append(alcDrink, mainDish, nonAlc, dessert)
    container.append(menuItems)
    content.append(container)

}

export {menuPage}