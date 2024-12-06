import './historic.css'
import { tituloMes } from '../funciones/renderhistoric'
import { count } from '../funciones/renderhistoric'


const historic = () => {
    
    document.querySelector("body").innerHTML = `
        <div id = "historicBody">
            
            <button id = "back">Atras</button>

            <div id = "currentMonth">
                <h3 id = "h3actual"></h3>
                
                <div id = "divDias">
                    <h2 id = "h2Dias">2</h2>
                    <h3 id = "h3Dias">Días Trabajados</h3>
                </div>

                <div id = "divhoras">
                    <h2 id = "h2horas"></h2>
                    <h3 id = "h3horas">Horas Trabajadas</h3>
                </div>
            </div>

            <div id = "historicDiv">
                <h3 id = "h3Historic">Histórico</h3>
                <button id = "semanas">Semanas</button>
                <button id = "meses">Meses</button>
                <button id = "anios">Años</button>
            </div>

            <div id = "showlist">
            </div>

        </div>
    `

    const titulomes = document.querySelector("#h3actual")
    const horasMes = document.querySelector("#h2horas")
    tituloMes(titulomes)

    count()
    
    
}

export default historic