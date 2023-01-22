const btnOpen = document.querySelector('.main-btn');
const btnClose = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');
const video = document.getElementById('video');
const linkVideo = video.src;

function switchModal () {
    modal.classList.toggle('modal-open');
}

btnOpen.addEventListener ('click', () => {
    switchModal();
    video.setAttribute("src", linkVideo);
});

btnClose.addEventListener ('click', () => {
    switchModal();
    video.setAttribute("src", "");
});

