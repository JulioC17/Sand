import anime from "animejs";
import './principal.css'

const main = () => {
        const name = localStorage.getItem("usuario")
        const work = localStorage.getItem("localTrabajo")
        
        document.querySelector("body").innerHTML = `
            <h1>${name}</h1>
           
        `
        
        
       
    }

export default main