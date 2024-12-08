import './historic.css'
import { tituloMes } from '../funciones/renderhistoric'
import { count } from '../funciones/renderhistoric'
import main from '../principal/principal'
import { showWeeksList } from '../funciones/renderhistoric'
import { showDayList } from '../funciones/renderhistoric'


const historic = () => {
    
    document.querySelector("body").innerHTML = `
        <div id = "historicBody">
            
            <button id = "back">Atras</button>

            <div id = "currentMonth">
                <h3 id = "h3actual"></h3>
                
                <div id = "divDias">
                    <h2 id = "h2Dias"></h2>
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

    const atrasBtn = document.querySelector("#back").addEventListener("click", () => {
        main()
    })
    
    const titulomes = document.querySelector("#h3actual")
    const horasMes = document.querySelector("#h2horas")
    const diasMes = document.querySelector("#h2Dias")
    const weeksBtn = document.querySelector("#semanas")
    const monthsBtn = document.querySelector("#meses")
    const showlist = document.querySelector("#showlist")
    
    tituloMes(titulomes)
    count(diasMes, horasMes)
    showDayList(showlist)

    weeksBtn.addEventListener("click", () => {
        showlist.innerHTML = ""
        showWeeksList(showlist)
    })

    monthsBtn.addEventListener("click", () => {
        
    })
    
    
    
}

export default historic