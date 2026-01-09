const menu = document.getElementById('list');
const bar = document.getElementById('phone');

bar.addEventListener('click', function() {
    menu.classList.toggle('active');
});