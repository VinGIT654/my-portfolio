

document.addEventListener('DOMContentLoaded', () => {

    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    gsap.delayedCall(2, () => {
        document.body.style.backgroundColor = "#111"; // Set the background color back to black after 2 seconds
    });

    gsap.from("header", {
        duration: 1,
        opacity: 0,
        y: -50
    });

    gsap.from("nav ul li", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2
    });

    gsap.from("#about", {
        scrollTrigger: "#about",
        duration: 1,
        opacity: 0,
        x: -100
    });

    gsap.from("#projects", {
        scrollTrigger: "#projects",
        duration: 1,
        opacity: 0,
        x: 100
    });

    gsap.from("#education", {
        scrollTrigger: "#education",
        duration: 1,
        opacity: 0,
        y: 100
    });

    gsap.from("#skills", {
        scrollTrigger: "#skills",
        duration: 1,
        opacity: 0,
        x: -100
    });

    gsap.from("#contact", {
        scrollTrigger: "#contact",
        duration: 1,
        opacity: 0,
        y: 100
    });

    gsap.from(".project-card", {
        scrollTrigger: "#projects",
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.2
    });

    gsap.from(".education-card", {
        scrollTrigger: "#education",
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.2
        


    });
});






