import anime from "animejs";
import './principal.css'
import timeup from "../timeup/timeup";

const main = () => { //duncion que pinta los elementos de la pagina principal
        const name = localStorage.getItem("usuario")
        
        document.querySelector("body").innerHTML = `
           <div id = "principal">
                <nav id = "navbar">
                    <button id = "historic">Histórico</button>
                    <button id = "edit">Editar</button>
                </nav>

                <h1 id = "welcome">Bienvenido<span> ${name}</span></h1>
            
                <section id = "worked">
                    <h3>Trabajado este mes:</h3>
                    <h2>10 horas</h2>
                </section>

                <button id = "fichar">FICHAR</button>
            
           </div>
        `

const ficharBtn = document.querySelector("#fichar")

ficharBtn.addEventListener("click", () => {
    localStorage.setItem("tempTime", new Date().getTime())
    timeup()
    
})

 anime({ // animaciones de Principal
            targets: '#navbar',
            translateY: 50,
            opacity: [0, 1],
            duration:1000,
            easing: "easeOutElastic(0.5, 1)"
});

anime({ 
        targets: '#welcome',
        translateY: 50,
        opacity: [0, 1],
        duration:2000,
        easing: "easeOutElastic(0.5, 1)"
});

anime({ 
    targets: '#worked',
    translateY: 50,
    opacity: [0, 1],
    duration:3000,
    easing: "easeOutElastic(0.5, 1)"
});

anime({ 
    targets: '#fichar',
    translateY: -50,
    opacity: [0, 1],
    duration:2000,
    easing: "easeOutElastic(0.5, 1)"
});

      
        
        
       
    }

export default main