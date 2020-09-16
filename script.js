const keysArray = ['s', 'f', 'i', '9', 'u', '6', 'p', 't', 'y']

const keys = document.querySelectorAll('.key')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const keysIndex = keysArray.indexOf(key) 

    if (keysIndex > -1) playNote(keys[keysIndex])
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
}