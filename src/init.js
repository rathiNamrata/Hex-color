alert('init.js loaded!');

const data = {
    character: [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
}

const dom = {
    body : document.querySelector('body'),
    display : document.querySelector('.display'),
    btnColor : document.getElementById('color-change-btn')
}

function generateRandomcolor() {
    let color = '#' ;
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * data.character.length);
        color += data.character[randomIndex];
    }
    return color;
}

dom.btnColor.addEventListener('click', function() {
    const randomColor = generateRandomcolor();
    dom.body.style.backgroundColor = randomColor;
    dom.display.innerText = ` Hex code :${randomColor}` ;
})