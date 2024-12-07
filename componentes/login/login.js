import anime from 'animejs';
import './login.css'
import main from '../principal/principal';



const login = () => {  //esto pinta el login en caso de que el usuario no este registrado 
    document.querySelector("body").innerHTML = `
    <h1 id = "brand" >OnTime</h1>
    <div id = "login">
        <input type="text" placeholder="Escribe tu nombre" id = "name">
        <input type="text" placeholder="Local de Trabajo" id = "work">
        <button id = "submit">Enviar</button>
    </div>
    <footer id = "footer">Powered by JulioCesar17</footer>
`;




const alerta = () => { //esto maneja que el usuario no deje campos en blanco enviando una alerta o de lo contrario guarda los datos necesarios en local storagge
    const nameInput = document.querySelector("#name")
    const workInput = document.querySelector("#work")
    const submitBtn = document.querySelector("#submit")
    
    submitBtn.addEventListener("click", () => {
        if (nameInput.value === "" || workInput.value === ""){
            alert("Introduce un Nombre y un lugar de Trabajo")
            console.log("hola");
        }else{
            localStorage.setItem("usuario", nameInput.value)
            localStorage.setItem("localTrabajo", workInput.value)
            main()
        }
    })
}
alerta() //llamamos a la funcion para que se ejecute dentro de la funcion login



anime({   //animaciones del login
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


  

