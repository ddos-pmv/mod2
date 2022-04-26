let slideIndex = 1;
window.addEventListener('click', (e) => {
    if (e.target == $('.prev')) {
        showSlide(slideIndex -= 1)
    }
    if (e.target == $('.next')) {
        slideIndex += 1
        showSlide(slideIndex)
    }
})

function showSlide(slideIndex) {
    let slides = document.querySelectorAll('.item')
    console.log(slideIndex);
    if (slideIndex > 3) {
        slideIndex = 1;

    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
        console.log(321);
    }
    for (let slide of slides) {
        slide.style.display = "none"
    }
    slides[slideIndex - 1].style.display = "block"
}
showSlide(slideIndex)