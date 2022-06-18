



function uuid() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function makeNewMovableSquare(speed = 1, spawnX = 0, spawnY = 0) {
    let posX = spawnX
    let posY = spawnY
    const uniqueID = uuid()
    const square = document.createElement('div')
    square.classList.add('player')
    square.setAttribute('id', uniqueID)
    
    document.body.appendChild(square);
    document.getElementById(uniqueID).addEventListener('keydown', (e) => {

        if (e.key === 'w') {
            posY-=speed
        } 
        if (e.key === 'a') {
            posX-=speed
        }
        if (e.key === 's') {
            posY+=speed
        }
        if (e.key === 'd') {
            posX+=speed
        }
        document.getElementById(uniqueID).style.setProperty('left', `${posX}px`)
        document.getElementById(uniqueID).style.setProperty('top', `${posY}px`)
    })
}

makeNewMovableSquare('e', 'r', 3, 300, 20)
