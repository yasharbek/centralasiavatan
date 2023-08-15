const burger = document.querySelector("nav svg");
const ourlinks = document.querySelector(".links");
const anchorTags = ourlinks.querySelectorAll("a");

burger.addEventListener("click", () => {
        if (burger.classList.contains("active")){
            gsap.to(".links", {x: "100%"});
            gsap.to(".line", {stroke: "white"});
            gsap.set("body", {overflow: "auto"});
        }else{
            //burger is clicked on
            gsap.to(".links", {x: '0%'});
            gsap.to(".line", {stroke: "black"})
            gsap.fromTo('.links a', {opacity: 0, y: 0 }, 
            {opacity: 1, y:20, delay: 0.25, stagger: 0.2});
            gsap.set("body", {overflow: "hidden"});
        }
        burger.classList.toggle("active");
});

anchorTags.forEach(anchor => {
    anchor.addEventListener("click", () => {
        if (!anchor.classList.contains("active")){
            gsap.to(".links", {x: "100%"});
            gsap.to(".line", {stroke: "white"});
            gsap.set("body", {overflow: "auto"});
        }
        burger.classList.toggle("active");
        //here you just press it once -- so once it is not active you can scroll, but you press 
        //again and it becomes actie -- how do we make sure that scrollin
        anchor.classList.toggle("active");
        anchor.classList.toggle("active");
    });
});

const images = gsap.utils.toArray(".celebration");
gsap.set(images, {opacity: 0});


images.forEach((image) => {
    ScrollTrigger.create({
        trigger: image,
        start: "top center",
        end: "bottom center",
        markers: false,
        onEnter: () => {
            gsap.to(image, {opacity: 1, duration: .5});
        }
    });
});