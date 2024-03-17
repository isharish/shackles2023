const element = document.querySelector('.sc');

window.addEventListener('scroll', () => {
    console.log("hiii");
    elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('animate');
        }
    });
});

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

elements.forEach((element) => {
    if (isElementInViewport(element)) {
        element.classList.add('animate');
    }
});