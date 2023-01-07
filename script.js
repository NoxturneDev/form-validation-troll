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
        btn.innerText = "ea gabisa 🤣"
        if (rect.x >= boundaries.x + boundaries.w - 90) {
            btn.style.left = direction.right
            return
        } else {
            btn.style.left = direction.left
            return
        }
    } else {
        btn.innerText = "ea gabisa 🤣"
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


