const doc = window.document
const container = doc.querySelector('.main-wrapper')
const btn = doc.getElementById('btn-submit')
const password = doc.getElementById('password')
const username = doc.getElementById('name')
const toastDanger = doc.getElementById('toast-danger')
const toastSuccess = doc.getElementById('toast-success')

const mousePost = { x: 0, y: 0 }
let valid = undefined

function validateForm() {
    if (username.value != "galih adhi kusuma" || password.value != "galih123") {

        valid = false
        container.style.backgroundColor = "#f23729"
        toastDanger.hidden = false
        toastSuccess.hidden = true
        return
    }

    toastSuccess.hidden = false
    toastDanger.hidden = true
    container.style.backgroundColor = "limegreen"
    valid = true
}

let treshold;
function debounceFunction(timeout) {
    clearTimeout(treshold)
    treshold = setTimeout(() => {
        validateForm()
    }, timeout)
}

function getButtonWrapperBoundaries() {
    const buttonWrapper = doc.querySelector('.button-wrapper')
    const rect = buttonWrapper.getBoundingClientRect()

    return {
        x: rect.x, y: rect.y, w: rect.width
    }
}

function moveButton() {
    const currStyle = getComputedStyle(btn)
    const currentLeft = currStyle.left
    const direction = {
        left: `${parseInt(currentLeft) + 50}px`,
        right: `${parseInt(currentLeft) - 50}px`
    }

    const boundaries = getButtonWrapperBoundaries()
    const rect = btn.getBoundingClientRect()


    if (mousePost.x - rect.x <= rect.width / 2) {
        if (rect.x >= boundaries.x + boundaries.w - 90) {
            btn.style.left = direction.right
            return
        } else {
            btn.style.left = direction.left
            return
        }
    } else {
        if (rect.x <= boundaries.x + 50) {
            btn.style.left = direction.left
            return
        } else {
            btn.style.left = direction.right
            return
        }
    }
}


btn.addEventListener('mouseenter', () => {
    if (valid) return
    console.log(valid)

    moveButton()
})

username.addEventListener('keydown', () => {
    debounceFunction(300)
})
password.addEventListener('keydown', () => {
    debounceFunction(300)
})

window.addEventListener('mousemove', (e) => {
    mousePost.x = e.clientX
    mousePost.y = e.clientY
})


