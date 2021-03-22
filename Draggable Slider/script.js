const imgs = document.getElementById("imgs")
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const img = document.querySelectorAll('#imgs img')
let idx = 0
let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if (idx > img.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = img.length - 1
    }
    imgs.style.transform = `translateX(${-idx * 800}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    resetInterval()
    changeImage()
})
leftBtn.addEventListener('click', () => {
    idx--
    resetInterval()
    changeImage()
})

let startX,
    lastX,
    isPressed,
    move
imgs.addEventListener('mousedown', (e) => {
    isPressed = true
    startX = e.pageX
    clearInterval(interval)
})
imgs.addEventListener('mouseup', (e) => {
    isPressed = false
    lastX = e.pageX
    if (move < 0) {
        idx--
        resetInterval()
        changeImage()
    } else if (move > 0) {
        idx++
        resetInterval()
        changeImage()
    } else {
        resetInterval()
        changeImage()
    }
})
imgs.addEventListener('mouseleave', (e) => {
    isPressed = false
})
imgs.addEventListener('mousemove', (e) => {
    e.preventDefault()
    if (isPressed) {
        lastX = e.pageX
        move = startX - lastX
        console.log(move);
        imgs.style.transform = `translateX(${-idx * 800-move}px)`

    }

})