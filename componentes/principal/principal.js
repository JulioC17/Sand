import anime from "animejs";
import './principal.css'

const main = () => {
        const nameInput = document.querySelector("#name")
        const workInput = document.querySelector("#work")
        const submitBtn = document.querySelector("#submit")
        
        submitBtn.addEventListener("click", () => {
            if (nameInput.value === "" || workInput.value === ""){
                alert("Introduce un Nombre y un lugar de Trabajo")
                console.log("hola");
                
            }
        })
    }

export default main