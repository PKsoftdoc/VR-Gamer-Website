
const btn = document.querySelector('#btns');
const wrong = document.querySelector('#xmark');

btn.addEventListener('click', (e) => {
    const navBar = document.querySelector('#slide');
    if(navBar.style.display === 'block'){
        navBar.style.display = 'none';
    }else{
        navBar.style.display = 'block';
    }
});

wrong.addEventListener('click', (e) => {
    const barClose = document.querySelector('#slide');
    barClose.style.display = 'none';
});