function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locoScroll()
cluttering()
cursorAnimation()
page2Animation()
page4Animation()
page5Animation()
page6Animation()

function cursorAnimation() {
    var cursor = document.querySelector("#cursor")
    var page1content = document.querySelector("#page1-content")

    page1content.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.pageX - 100,
            y: dets.pageY - 100,
        })
    })
    page1content.addEventListener("mouseenter", function (dets) {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })
    page1content.addEventListener("mouseleave", function (dets) {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })
    
}

function cluttering() {
    var elem = document.querySelector("#heading")
var clutter = ""
elem.textContent.split("").forEach(function (val) {
    clutter += `<span class="inline-block">${val}</span>`
})
elem.innerHTML = clutter;
}

function page2Animation() {
    gsap.from('.elem h1',{
        y:120,
        stagger:.2,
        duration:1,
        scrollTrigger:{
            trigger:'#page2',
            scroller:'#main',
            start:"top 40%",
            end: "top 37%",
            markers: false,
            scrub:2
        }
    })
    
    gsap.from("#line",{
        width:0,
        duration:1,
        scrollTrigger:{
            trigger:'#page2',
            scroller:'#main',
            start:"top 77%",
            end: "top 67%",
            markers: false,
            scrub: 4
        }
    })
    
    gsap.from('.elem h4',{
        y:120,
        stagger:.2,
        duration:1,
        scrollTrigger:{
            trigger:'#page2',
            scroller:'#main',
            start:"top 90%",
            end: "top 60%",
            scrub:2
        }
    })
}

function page4Animation(){
    gsap.from('.elem2 h3',{
        y:120,
        stagger:.2,
        duration:1,
        scrollTrigger:{
            trigger:'#page4',
            scroller:'#main',
            start:"top 60%",
            end: "top 0%",
            scrub:2
        }
    })
    
    gsap.from("#line2",{
        width:0,
        duration:1,
        scrollTrigger:{
            trigger:'#page4',
            scroller:'#main',
            start:"top 77%",
            end: "top 67%",
            markers: false,
            scrub: 4
        }
    })
    
    gsap.from('#page4Top',{
        y:120,
        stagger:.2,
        duration:1,
        scrollTrigger:{
            trigger:'#page4',
            scroller:'#main',
            start:"top 60%",
            end: "top 0%",
            scrub:2
        }
    })
}

function page5Animation() {
    gsap.to("#c1", { duration: 2, strokeDasharray: "1700 2400", ease: "power4.inOut", scrollTrigger:{
        trigger:"#c1",
        scroller:"#main",
        start: "top 80%",
        end: "bottom 60%",
        scrub:4
    } });
    
    gsap.to("#rotater", { duration: 2, transform:"rotate(170deg)" , ease: "power4.inOut", scrollTrigger:{
        trigger:"#rotater",
        scroller:"#main",
        start: "top 80%",
        end: "bottom 60%",
        scrub:4
    } });
    
    gsap.to("#num h1",{
        duration: 2, y:220 , ease: "power4.inOut", scrollTrigger:{
            trigger:"#rotater",
            scroller:"#main",
            start: "top 80%",
            end: "bottom 60%",
            scrub:4
        } });
    
    gsap.from("#avail",{
            duration: 2,opacity:0, ease: "power4.inOut", scrollTrigger:{
                trigger:"#rotater",
                scroller:"#main",
                start: "top 80%",
                end: "bottom 60%",
                scrub:4
            } });
    
    
    var cursor2 = document.querySelector("#cursor2")
    var page5 = document.querySelector("#page5")
    
    page5.addEventListener("mousemove", function (dets) {
        gsap.to(cursor2, {
            x: dets.pageX - 900,
            y: dets.pageY - 750,
        })
    })
    page5.addEventListener("mouseenter", function (dets) {
        gsap.to(cursor2, {
            scale: 1,
            opacity: 1,
            delay:1
        })
    })
    page5.addEventListener("mouseleave", function (dets) {
        gsap.to(cursor2, {
            scale: 0,
            opacity: 0
        })
    })
}

function page6Animation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: true,
        autoplay: {
            delay: 0, // Set a very low delay (1 millisecond) or set it to 0
            disableOnInteraction: false, // Allow autoplay to continue even when user interacts with slides
          },
        loop:true,
        speed:4000,
        
      });
}

var btn = document.querySelector("#btn");

btn.addEventListener("mouseenter",function(){
    btn.style.backgroundColor = "#FEFCF1"
    btn.style.color = "black"
})
btn.addEventListener("mouseleave",function(){
    btn.style.backgroundColor = "black"
    btn.style.color = "#FEFCF1"
})

function cluttering2(a) {
    var clutter = ""
    a.textContent.split("").forEach(function (val) {
    clutter += `<span class="inline-block">${val}</span>`
})
a.innerHTML = clutter;
}

var tailer = document.querySelector("#tailer");
cluttering2(tailer);

gsap.from('#upperLeft',{
    y:-100,
    duration:1,
    opacity:0,
    stagger:.2,
    scrollTrigger:{
        trigger:'#page7',
        scroller:'#main',
        start:"top 80%",
        end: "top 0%",
        scrub: 1,
    }
})

// gsap.from('#btn',{
//     y:-100,
//     duration:1,
//     opacity:0,
//     scrollTrigger:{
//         trigger:'#page7',
//         scroller:'#main',
//         start:"top 80%",
//         end: "top 0%",
//         markers:true,
//         scrub: 2,
//     }
// })

gsap.from("#tailer span",{
    y:-100,
    duration:.1,
    opacity:0,
    stagger:0.1,
    
    duration:1,
    ease: "power4.inOut",
    scrollTrigger:{
        trigger:'#page8',
        scroller:'#main',
        start:"top 90%",
        end:"top 0%"
    }
})
