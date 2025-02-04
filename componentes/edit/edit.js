import './edit.css'
import main from '../principal/principal'
import anime from 'animejs'

const edit = () => {
    document.querySelector("body").innerHTML = `
    <div id = "editar">
    
        <button id = "backEdit">Atras</button>

        <div id = "inputEdit">
            
            <input type="text" placeholder="Escribe tu nuevo nombre" id = "nameEdit">
            
            <input type="text" placeholder="Nuevo Local de Trabajo" id = "workEdit">
            
            <div id = "check">
                <input type = "checkbox" id = "allRemove">    
                <h3 id = "remove">Eliminar todos los datos</h3>
            </div>
            
            <button id = "submitEdit">Enviar</button>
        
        </div>
    </div>
    `
    const record = localStorage.getItem("record")
    const inputEditName = document.querySelector("#nameEdit")
    const inputEditLocal = document.querySelector("#workEdit")
    const inputRemove = document.querySelector("#allRemove")
    const editBtn = document.querySelector("#submitEdit")
    const backEditBtn = document.querySelector("#backEdit")

    editBtn.addEventListener("click", () => {//manejamos los eventos con respecto a las entradas de estos inputs
        if(!inputEditName.value == ""){
            localStorage.setItem("usuario", inputEditName.value)
            main()
        }
        if(!inputEditLocal.value == ""){
            localStorage.setItem("localTrabajo", inputEditLocal.value)
            main()
        }
        if(inputRemove.checked){
            localStorage.removeItem("record")
            main()
        }
        if(inputEditName.value == "" && inputEditLocal.value == "" && !inputRemove.checked){
            alert("escribe algo")
        }


    })

    backEditBtn.addEventListener("click", () => {
        main()
    })

    anime({ // animaciones de edit
        targets: '#inputEdit',
        translateY: 50,
        opacity: [0, 1],
        duration:2000,
        easing: "easeOutElastic(0.5, 1)"
    });

    anime({ // animaciones de edit
        targets: '#backEdit',
        translateY: 50,
        opacity: [0, 1],
        duration:1000,
        easing: "easeOutElastic(0.5, 1)"
    });

}

export default edit