
const miniCont = (name, data, picture) => {
    const container = document.createElement('div')
    container.classList = 'cont'

    const info = document.createElement('div')
    info.classList = 'infoCont'
    
    const fullName = document.createElement('h2');
    fullName.classList = 'fullName'
    fullName.innerText = name;
    info.appendChild(fullName)
    
    const dataInfo = document.createElement('p');
    dataInfo.classList = 'dataInfo'
    dataInfo.innerText = data
    info.appendChild(dataInfo);
    container.appendChild(info)

    
    const pic = document.createElement('img')
    pic.classList = 'pic'
    pic.src = picture
    container.appendChild(pic)
    
    return container
}

const contactPage = function() {
    const content = document.getElementById('content');

    const contactHeading = document.createElement('h1');
    contactHeading.innerText = 'Contact Us';
    content.append(contactHeading)

    const location = document.createElement('img');
    location.id = "locationImg"
    
    location.src = 'images/location.png'
    content.append(location)

    const address = document.createElement('p');
    address.innerText = '123 Edge Point, Albany, CA 94804'
    content.append(address)

    const email = document.createElement('p');
    email.innerText = 'cricket@ewchew.com'
    content.append(email)
    

    const employees = document.createElement('div');
    employees.classList = 'employees'
    const emplHead = document.createElement('h3');
    emplHead.innerText = 'Contact Us';
    emplHead.innerText = 'When you come, expect to see:'
    content.append(emplHead)

    const manager = miniCont('Bim Bam', 'Manager', 'images/manager.jpg');
    const chef = miniCont('Slick Slack', 'Chef', 'images/chef.jpg');
    const bartender = miniCont('Tik Tak', 'Bartender', 'images/bartender.jpg')
    const waiter = miniCont('Wick Wak', 'Waiter', 'images/waiter.jpg');
    employees.append(manager, chef, bartender, waiter);
    content.append(employees)
}

export {contactPage, miniCont}