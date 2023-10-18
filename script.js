const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 120);
});

let menu = document.querySelector("#menu-icon");

let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classlist.toggle('active')
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}


// var tl = gsap.timeline();

// tl
//     .from(".navlist",{
//         opacity: 0,
//         y: -20,
//         scale: 1.1,
//         duration: 1
//     })

//     .from(".logo",{
//         x : -30,
//         duration: 1,
//         opacity: 0,
//     })

//     .from(".top-btnn",{
//         x: 30,
//         opacity: 0,
//         duration: 1,
//     })

//     .from(".hero h4",{
//         opacity: 0,
//         y: -20,
//         duration: 1
//     })
//     .from(".hero h1",{
//         opacity: 0,
//         y: -20,
//         scale: 1.1,
//         duration: 1
//     })
//     .from(".hero p",{
//         opacity: 0,
//         y: -20,
//         scale: 1.1,
//         duration: 1
//     })
//     .from(".social",{
//         opacity: 0,
//         x: 40,
//         scale: 1.2,
//         duration: 1
//     })
//     .from(".main-btn",{
//         opacity: 0,
//         x: 40,
//         scale: 1.2,
//         duration: 1
//     })
//     .from([".hero  background:url(./images/IMG_4680-removebg-preview.png);",{
//         opacity: 0,
//         x: 40,
//         scale: 1.2,
//         duration: 1
//     }])

//     .from(".about-img img",{
//         opacity: 0,
//         x: 40,
//         scale: 1.2,
//         duration: 1
//     })


//     .from(".about-text h2",{
//         opacity: 0,
//         x: 80,
//         scale: 1.2,
//         duration: 1
//     })
//     .from(".exp-area",{
//         opacity: 0,
//         x: 40,
//         // scale: 1.2,
//         duration: 1
//     })
//     .from(".about-text .btn",{
//         opacity: 0,
//         x: 40,
//         scale: 1.2,
//         duration: 1
//     })
//     .from(".center-text h2",{
//         opacity: 0,
//         x: 40,
//         scale: 1.2,
//         duration: 1
//     })