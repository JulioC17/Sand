import anime from 'animejs';
import './login.css'
import main from '../principal/principal';



const login = () => {  //esto pinta el login en caso de que el usuario no este registrado 
    document.querySelector("body").innerHTML = `
    <h1 id = "brand" >Sand</h1>
    <div id = "login">
        <input type="text" placeholder="Escribe tu nombre" id = "name">
        <input type="text" placeholder="Local de Trabajo" id = "work">
        <button id = "submit">Enviar</button>
    </div>
    <footer id = "footer">Powered by JulioCesar17</footer>
`;

const alerta = () => { //esto maneja que el usuario no deje campos en blanco enviando una alerta
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

alerta() //llamamos a la funcion para que se ejecute dentro de la funcion login

anime({
        targets: '#brand',
        translateY: 50,
        opacity: [0, 1],
        duration:2000,
        easing: "easeOutElastic(0.5, 1)"
});

anime({
        targets: '#login',
        translateY: -50,
        opacity: [0, 1],
        duration: 2000,
        easing: "easeOutElastic(0.5, 1)"
});

anime({
        targets: '#footer',
        translateY: -10,
        opacity: [0, 1],
        duration:2000,
        easing: "easeOutElastic(0.5, 1)"
});

    

}


export default login


  

/*     const body = document.querySelector("body")
    
    const h1 = document.createElement("h1")
    h1.id = "brand"
    h1.innerText = "Sand"

    const form = document.createElement("form")
    form.id = "login"
    
    const inputName = document.createElement("input")
    inputName.type = "text"
    inputName.placeholder = "Escribe tu nombre"
    inputName.id = "name"

    const inputWork = document.createElement("input")
    inputWork.type = "text"
    inputWork.placeholder = "Local de Trabajo"
    inputWork.id = "work"

    const submitBtn = document.createElement("button")
    submitBtn.id = "submit"
    submitBtn.innerText = "Enviar"

    const footer = document.createElement("footer")
    footer.id = "footer"
    footer.innerText = "Powered by JulioCesar17"

    form.appendChild(inputName)
    form.appendChild(inputWork)
    form.appendChild(submitBtn)
    body.appendChild(h1)
    body.appendChild(form)
    body.appendChild(footer) */