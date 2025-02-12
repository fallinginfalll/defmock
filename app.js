const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 1 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

// Home page intro from: https://youtu.be/sN93DRYkCO8




function scrolldown() {
    window.scrollTo(0, document.body.scrollHeight);
}


window.addEventListener('scroll', (event) => {
    
    let scroll = this.scrollY;
    document.getElementById('bg').style.display = 'block';
    document.body.style.setProperty('--scroll', scroll);

    // Change the color of #dognity-home based on scroll position
    const dognityHome = document.querySelector('#bg-container #dognity-home');
    if (scroll > 0) {
        dognityHome.classList.add('red'); // Add red class on scroll
    } else {
        dognityHome.classList.remove('red'); // Remove red class when at the top
    }

    // var scroll = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    // document.body.style.setProperty('--scroll', scroll);

    // document.getElementById('dognity-home').style.translate = `calc(${scroll}px)`;
    // var limit = 

    // console.log(scroll);

});

$(window).scroll(function() {

    // If scroll almost reach the bottom
    if($(window).scrollTop() + $(window).height() > $(document).height() - 20) {
        // document.getElementsByTagName('nav')[0].style.display = "flex";
        // document.getElementsByTagName('nav')[0].style.translate = "0%";
        document.getElementsByTagName('nav')[0].style.transform = "translateY(0%)";
        document.getElementsByTagName('nav')[0].style.transition = "0.5s";
        document.getElementById('dognity-home').style.animationName = 'floating';
    }
    else {

        document.getElementsByTagName('nav')[0].style.transform = "translateY(80%)";
        document.getElementsByTagName('nav')[0].style.transition = "0.5s";
        document.getElementById('dognity-home').style.animationName = 'none';
        
    }
 });