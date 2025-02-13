window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var section = document.querySelector('section');
    if (window.scrollY >= section.offsetHeight) {
        const header = this.document.querySelector('header');
        header.classList.remove('hiden');
    } else {
        const header = this.document.querySelector('header');
        header.classList.add('hiden');
    }
});

document.getElementById('top-button').addEventListener('click', function() {
    var navbar = document.querySelector('.navbar');
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'block';
        setTimeout(function() {
            navbar.style.opacity = 1;
        }, 10); // Delay to ensure the transition works
    } else {
        navbar.style.opacity = 0;
        setTimeout(function() {
            navbar.style.display = 'none';
        }, 500); // Matches the transition duration
    }
});