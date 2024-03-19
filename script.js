var tu = gsap.timeline();
var mq = gsap.matchMedia();
var tl = gsap.timeline({scrollTrigger:{
       trigger: ".two",
       start: "0% 95%",
       end: "70% 50%",
       scrub : true,
       // markers: true // welcome

}})
var tl2 = gsap.timeline({scrollTrigger:{
       trigger: ".three",
       start: "0% 95%",
       end: "70% 50%",
       scrub : true,
       // markers: true

}})
tu.from("nav",{
       top: "-30%",
       opacity: 0,
       duration: 1
})
tu.from("#bur",{
       // right: "-50%",
       scale: 2,
       opacity: 0,
       duration: 1,

})
tu.from("#fanta, #orange, #grouporange",{
       opacity: 0,
       duration: 0.5,
       // delay: 1,
       stagger: 0.2
})
tu.from("#leaf, #leaf2",{
       opacity: 0
})

tl.to("#fanta",{
       top: "115vh",
       left: "5vw"
}, 'orange')
tl.to("#orange",{
       top: "160vh",
       left: "23%"
},'orange')
tl.to("#grouporange",{
       width: "15%",
       top: "165vh",
       right: "5%"
},'orange')
tl.to("#leaf",{
       rotate: "130deg",
       top: "110vh",
       left: "80%"
},'orange')
tl.to("#leaf2",{
       rotate: "130deg",
       top: "110vh",
       left: "0%"
},'orange')
tl2.to("#fanta",{
       width : "30%",
       top: "225vh",
       left: "35%"
},'red')
tl2.to("#grouporange",{
       left: "0%"
},'red')
tl2.to("#orange",{
       left: "100%"
},'red')

//mq

mq.add("(max-width: 1106px)", ()=>{
       tl.to("#fanta",{
              top: "135vh",
              left: "5vw"
       }, 'orange')
       tl2.to("#fanta",{
              width : "40%",
              top: "216vh",
              left: "29.9%"
       },'red')
       tl2.to("#orange",{
              left: "40%"
       },'red')
       

})
mq.add("(max-width: 958px)", ()=>{
       tl.to("#fanta",{
              top: "135vh",
              left: "5vw"
       }, 'orange')
       tl2.to("#fanta",{
              width : "40%",
              top: "225vh",
              left: "29.9%"
       },'red')

})
mq.add("(max-width: 800px)", ()=>{
       tl.to("#fanta",{
              top: "135vh",
              left: "5vw"
       }, 'orange')
       tl2.to("#fanta",{
              width : "40%",
              top: "225vh",
              left: "44.9%"
       },'red')

})