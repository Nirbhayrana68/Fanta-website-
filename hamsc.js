document.getElementById("homeid").addEventListener("mouseover",function(){
    gsap.to(".home",{
        visibility: "visible",
        // opacity: 0
    })
    gsap.from(".home",{
        scale: 2,
        opacity: 0,
        duration: 1
    })
})
document.getElementById("homeid").addEventListener("mouseout",function(){
    gsap.to(".home",{
        visibility: "hidden",
        // opacity: 0
    })
})


document.getElementById("aboutid").addEventListener("mouseover",function(){
    gsap.to(".about",{
        visibility: "visible",
        // opacity: 0
    })
    gsap.from(".about",{
        scale: 2,
        opacity: 0,
        duration: 1
    })
})
document.getElementById("aboutid").addEventListener("mouseout",function(){
    gsap.to(".about",{
        visibility: "hidden",
    })
})


document.getElementById("productsid").addEventListener("mouseover",function(){
    gsap.to(".products",{
        visibility: "visible",
        // opacity: 0
    })
    gsap.from(".products",{
        scale: 2,
        opacity: 0,
        duration: 1
    })
})
document.getElementById("productsid").addEventListener("mouseout",function(){
    gsap.to(".products",{
        visibility: "hidden",
    })
})