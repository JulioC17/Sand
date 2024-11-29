import './timeup.css'

const timeup = () => {
    const date = new Date()
    const dateDay = date.getDay()
    const dateHours = date.getHours()
    const dateMinutes = date.getMinutes()
    const dateSeconds = date.getSeconds()
    const completeHour = `${dateHours.toString().padStart(2, '0')}:${dateMinutes.toString().padStart(2, '0')}:${dateSeconds.toString().padStart(2, '0')}`
    const entryHour = date.getTime()
    const exitHour = date.getTime()
    const getHistoric = JSON.parse(localStorage.getItem("historico"))

    /* const historic = localStorage.getItem("historico") */
    if(localStorage.getItem("historico") === null){
       localStorage.setItem("historico", JSON.stringify([]))
       const historic = JSON.parse(localStorage.getItem         ("historico"))
       const firstEntry = {
        "mes" : date.toLocaleString("es-ES", {month: 'long'}),
        'fechaDia' : {
            "diaDelMes" : dateDay,
            "entryHour" : entryHour,
            "stringEntryHour" : completeHour
        }
        }
        localStorage.setItem("historico", JSON.stringify(firstEntry))
    }//else que falta por poner aqui

    document.querySelector("body").innerHTML = `
        <div id = "timeup">
           
            <div id = "cronometro">
                <h2 id = "journal">Jornada Total de Hoy</h2>
                <h1>00:00:00</h1>
            </div>
                
            <div id = "entry">
                <h4>Hora de Entrada</h4>
                <h4>${completeHour}</h4>
            </div>

            <div id = "local">
                <h4>Local</h4>
                <h4>${localStorage.getItem("localTrabajo")}</h4>
            </div>

            <button id = "desfichar">DESFICHAR</button>
        </div>
    `


    


    
    
    
   
}

export default timeup