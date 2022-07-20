const navslide = () => {
    const burger = document.querySelector('.material-symbols-outlined');
    const nav = document.querySelector('.navbar');

    burger.addEventListener('click',() => {
        nav.classList.toggle('no');

    });
}

navslide();