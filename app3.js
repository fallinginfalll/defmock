document.addEventListener("DOMContentLoaded", function() {
    const nameability = document.getElementById('nameability');
    const questionn = document.getElementById('questionn');
    const btn = document.querySelector('.btn');

    // Set initial opacity to 0
    nameability.style.opacity = 0;
    questionn.style.opacity = 0;
    btn.style.opacity = 0;

    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start animations when the element is in the viewport
                nameability.style.opacity = 1;
                nameability.style.animation = 'animate 1s ease-in-out forwards';

                setTimeout(() => {
                    questionn.style.opacity = 1;
                    questionn.style.animation = 'animate 1s ease-in-out forwards';
                }, 2500); // Delay for the question

                setTimeout(() => {
                    btn.style.opacity = 1;
                    btn.style.animation = 'animate 1s ease-in-out forwards';
                }, 4500); // Delay for the buttons

                // Stop observing after the animations have started
                observer.unobserve(entry.target);
            }
        });
    });

    // Observe the elements
    observer.observe(nameability);
});