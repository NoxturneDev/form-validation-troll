const doc = window.document
const btn = doc.getElementById('btn-submit')
const password = doc.getElementById('password')
const username = doc.getElementById('name')

const mousePost = { x: 0, y: 0 }
let valid = false

function validateForm() {
    if (username.value != "galih adhi kusuma" || password.value != "galih123") {

        console.log('salah')
        valid = false
        return
    }

    valid = true
}

function getButtonWrapperBoundaries(mouse) {
    const { clientX, clientY } = mouse
    const buttonWrapper = doc.querySelector('.button-wrapper')
    const rect = buttonWrapper.getBoundingClientRect()

    const C_X = clientX,
        C_Y = clientY,
        R_X = rect.x,
        R_Y = rect.y,
        R_W = rect.width,
        R_H = rect.height

    if (C_X > R_X && C_X < R_X + R_W && C_Y > R_Y && C_Y < R_H + R_Y) {
        return true
    }

    return false
}

function moveButton() {
    const rect = btn.getBoundingClientRect()

    const currStyle = getComputedStyle(btn)
    const currentLeft = currStyle.left

    if (mousePost.x - rect.x <= rect.width / 2) {
        btn.style.left = `${parseInt(currentLeft) + 50}px`
    } else {
        btn.style.left = `${parseInt(currentLeft) - 50}px`
    }
}

btn.addEventListener('mouseenter', () => {
    if (valid) return
    console.log(valid)

    moveButton()
})

username.addEventListener('keydown', validateForm)
password.addEventListener('keydown', validateForm)

window.addEventListener('mousemove', (e) => {
    mousePost.x = e.clientX
    mousePost.y = e.clientY
})


