const planetsmallcard = document.querySelectorAll('.planet');
const planetimage = document.querySelectorAll('.planet-image');
const bgimage = document.querySelectorAll('.bgimg');
const herodiv = document.querySelector('.hero')
const body = document.querySelector('body')
const smallplanet = document.querySelectorAll('.planet .active .planet-img ')

planetsmallcard.forEach(function (card, index) {
    card.addEventListener('mouseover', function () {

        planetsmallcard.forEach(function (otherCard) {
            otherCard.classList.remove("active");
        });
        card.classList.add("active");

        const infoPlanet = document.querySelector(`.info-planet:nth-child(${index + 1})`);
        if (infoPlanet) {
            infoPlanet.scrollIntoView({ behavior: 'smooth' });
        }

    })

});

body.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    // Adjust background position
    bgimage.forEach(function (theimage) {
        const moveX = (mouseX / window.innerWidth) * 3;
        const moveY = (mouseY / window.innerHeight) * 3;
        theimage.style.transform = `scale(1.4) translate(${moveX - 5}%, ${moveY - 5}%)`;
    })
    // Adjust planet image position
    planetimage.forEach(function (bigimage) {
        const offsetX = (window.innerWidth / 2 - mouseX) / window.innerWidth * 30;
        const offsetY = (window.innerHeight / 2 - mouseY) / window.innerHeight * 30;
        bigimage.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});
