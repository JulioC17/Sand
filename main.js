import './style.css'
import anime from 'animejs'

anime({
  targets: ".box",
  translateY: [window.innerHeight, "50%"],
  duration: 1000,
  easing: "easeOutElastic(1, 1)",
})

anime({
  targets:".h1",
  translateY: [-window.innerHeight, "50%"],
  duration:1300,
  easing: "easeOutElastic(1, 1.5)"
})



