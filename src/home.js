const createBareBones = (headerText, image, imageDesc, infoText ) => {
    const content = document.getElementById('content');
    
    const container = document.createElement('div')
    container.classList = 'container'

    const header = document.createElement('h1');
    header.textContent = headerText;
    container.appendChild(header);
    const pic = document.createElement('img');
    pic.id = 'homePic'
    pic.src = image;
    pic.alt = imageDesc;
    container.appendChild(pic);
    const info = document.createElement('p');
    info.innerText = infoText
    container.appendChild(info)
    content.append(container)
};

export default createBareBones;
