const btn = document.getElementById('myBtn');
const spoiler = document.getElementById('spoiler');

btn.addEventListener('click', () => {
    spoiler.classList.toggle('closed');
})

document.addEventListener('keydown', (event) => {
    if(event.code === 'Escape' && !spoiler.classList.contains('closed')) {
        spoiler.classList.add('closed');
    }
})

