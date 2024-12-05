import anime from "animejs";
import './principal.css'
import timeup from "../timeup/timeup";
import renderWeek from "../funciones/renderWeek";
import edit from "../edit/edit";
import historic from "../historic/historic";


const main = () => { //duncion que pinta los elementos de la pagina principal
    const name = localStorage.getItem("usuario")
        
    document.querySelector("body").innerHTML = `
       <div id = "principal">
            <nav id = "navbar">
                <button id = "historic">Histórico</button>
                <button id = "edit">Editar</button>
            </nav>
            
             <div id = "bienvenida">   
                <h1 id = "welcome">Bienvenido</h1>
                <h2 id = "nameWelcome">${name}</h2>
            </div>
                
            <section id = "worked">
                <h3>Trabajado esta Semana:</h3>
                <h2 id = "trabajado"></h2>
             </section>

            <button id = "fichar">FICHAR</button>
            
        </div>
        `

    const ficharBtn = document.querySelector("#fichar")
    const trabajado = document.querySelector("#trabajado")
    const editBtn = document.querySelector("#edit")
    const historicBtn = document.querySelector("#historic")
    
    ficharBtn.addEventListener("click", () => {//trabajamos eventos del boton fichar
        localStorage.setItem("tempTime", new Date().getTime())
        timeup()
    })

    editBtn.addEventListener("click", () => {//trabajamos eventos del botn editar
        edit()
    })

    historicBtn.addEventListener("click", () => {//trabajamos los eventos del botn historic
        historic()
    })


    renderWeek(trabajado)
    

    

    anime({ 
        targets: '#welcome',
        translateY: 50,
        opacity: [0, 1],
        duration:2000,
        easing: "easeOutElastic(0.5, 1)"
    });

    anime({ 
    targets: '#nameWelcome',
    translateY: 50,
    opacity: [0, 1],
    duration:3000,
    easing: "easeOutElastic(0.5, 1)"
    });

    anime({ 
    targets: '#worked',
    translateY: 50,
    opacity: [0, 1],
    duration:4000,
    easing: "easeOutElastic(0.5, 1)"
    });

    anime({ 
    targets: '#fichar',
    translateY: 50,
    opacity: [0, 1],
    duration:2000,
    easing: "easeOutElastic(0.5, 1)"
    });

}

export default main