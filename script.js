const cursor = document.querySelector(".cursor");
const cursorBg = document.querySelector(".cursor-bg");

document.addEventListener("mousemove", (e) => {
  cursor.style.display = `block`;
  cursor.style.left = `${e.x}px`;
  cursor.style.top = `${e.y}px`;
  cursorBg.style.left = `${e.x}px`;
  cursorBg.style.top = `${e.y}px`;
});

const header = document.querySelector("header");
const loader = document.querySelector(".loader");

gsap.to("header", {
  backgroundColor: "#000",
  height: "105px",
  padding: "10px 0",
  scrollTrigger: {
    trigger: "header",
    scroller: "body",
    scrub: 1,
    start: "top -10%",
    end: "center",
  },
});

gsap.to(".main", {
  backgroundColor: "#000",
  scrollTrigger: {
    // markers: true,
    scrub: 1,
    start: "top -10%",
    end: "top 100%",
  },
});

const myfunc = () => {
  gsap.to(".loader", {
    transform: "translateY(-100%)",
    display: "none"
  });
};

gsap.to('.quote-left', {
  x: 20,
  y:20,
  scrollTrigger:{
    trigger: '.quote-left',
    scrub: 1
  }
})

gsap.to('.quote-right', {
  x: -20,
  y:-20,
  scrollTrigger:{
    trigger: '.quote-left',
    scrub: 1
  }
})

gsap.to(".waiting-heading",{
  y: -100,
  scrollTrigger: {
    trigger: ".waiting-heading",
    start: "top 120%", 
    scrub: 2
  }
})

const change = gsap.utils.toArray(".cursur-change")

change.forEach(element => {
  element.addEventListener('mouseenter', ()=>{
    cursor.style.width = "50px"
    cursor.style.height = "50px"
    cursor.style.backgroundColor = "transparent"
    cursor.style.border = "1px solid #fff"
    cursor.style.transition = ".2s linear"
  })
  
  element.addEventListener('mouseleave', ()=>{
    cursor.style.width = "20px"
    cursor.style.height = "20px"
    cursor.style.backgroundColor = "#95c11e"
    cursor.style.border = "none"
    cursor.style.transition = ".2s linear"
  })
});
