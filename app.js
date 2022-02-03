let t1 = gsap.timeline()


t1.from(".card" ,
 {
    stagger: 0.2 ,
    opacity: 0,
    x: -30
 }
);

t1.from(".avatar img" , {
    stagger: 0.2,
    opacity: 0,
    y: 20
})

.t1.from(".card-footer" , {
    stagger:0.2,
    opacity: 0 ,
    y:10
});
