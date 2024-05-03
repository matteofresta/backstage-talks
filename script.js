document.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.carousel-item');
    const scrollY = window.scrollY;
    const height = window.innerHeight;

    items.forEach((item, index) => {
        const top = item.offsetTop;
        const bottom = top + item.offsetHeight;

        // Check if the middle of the item is within the middle of the viewport
        if (scrollY >= top - height / 2 && scrollY < bottom - height / 2) {
            switch(index) {
                case 0:
                    document.body.style.backgroundColor = '#FA608C'; // Black for item 1
                    break;
                case 1:
                    document.body.style.backgroundColor = '#FFFFFF'; // Red for item 2
                    break;
                case 2:
                    document.body.style.backgroundColor = '#2DC1B5'; // Blue for item 3
                    break;
                case 3:
                    document.body.style.backgroundColor = '#F9651A'; // Yellow for item 4
                    break;
                case 4:
                    document.body.style.backgroundColor = '#FABE01'; // Orange for item 5
                    break;
                case 5:
                    document.body.style.backgroundColor = '#213FBB'; // Teal for item 6
                    break;
                case 6:
                    document.body.style.backgroundColor = '#E31710'; // Pink for item 7
                    break;
            }
        }
    });
});

function smoothScrollTo(element, duration) {
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    function scrollStep(timestamp) {
        if (!startTime) startTime = timestamp;
        const timeElapsed = timestamp - startTime;
        const currentEasePosition = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, currentEasePosition);
        if (timeElapsed < duration) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}

document.addEventListener('DOMContentLoaded', () => {
    const footerLinks = document.querySelectorAll('footer .col a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                smoothScrollTo(targetElement, 200); // Scroll duration of 500 milliseconds
            }
        });
    });
});
