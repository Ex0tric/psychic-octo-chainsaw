document.addEventListener("mousemove", (e)=>{
  const cursor = document.querySelector('.cursor')
  const cursorBg = document.querySelector('.cursor-bg')
  cursor.style.display = `block`
  cursor.style.left = `${e.x}px`
  cursor.style.top = `${e.y}px`
  cursorBg.style.left = `${e.x }px`
  cursorBg.style.top = `${e.y }px`
})

const header = document.querySelector('header')
const loader = document.querySelector('.loader')

const loaderFunc = () =>{
  gsap.to('.loader',{
  transform: "translateY(-100%)"
})
}

gsap.to('header',{
  backgroundColor: "#000",
  height: "105px",
  padding: "10px 0",
  scrollTrigger: {
    trigger: 'header',
    scroller: "body",
    scrub: 1,
    start: "top -10%",
    end: "center",
  }
})

gsap.to('.main',{
  backgroundColor: "#000",
  scrollTrigger: {
    // markers: true, 
    scrub: 1,
    start: "top -10%",
    end: "top 100%",
  }
})
