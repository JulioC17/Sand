import './timeup.css'
import anime from 'animejs'
import main from '../principal/principal'

const timeup = () => { //funcion para pintar la pagina de fichaje
    const date = new Date()
    const dateHours = date.getHours()
    const dateMinutes = date.getMinutes()
    const dateSeconds = date.getSeconds()
    const completeHour = `${dateHours.toString().padStart(2, '0')}:${dateMinutes.toString().padStart(2, '0')}:${dateSeconds.toString().padStart(2, '0')}`
   
    document.querySelector("body").innerHTML = `
        <div id = "timeup">
           
            <div id = "cronometro">
                <h2 id = "journal">Jornada Total de Hoy</h2>
                <h1 id = "time">00:00:00</h1>
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

    const cronometro = () => { //funcion para hacer y pintar el cronometro
        let interval = setInterval(function () {
            const currentTime = new Date().getTime()
            const getTempTime = localStorage.getItem("tempTime")
            const updateTime = currentTime - getTempTime

            const updateHours = Math.floor(updateTime / 3600000)
            const updateMinutes = Math.floor((updateTime % 3600000) / 60000)
            const updateSeconds = Math.floor((updateTime % 60000) / 1000) 
       
            const updateFormattedTime = `${updateHours.toString().padStart(2, '0')}:${updateMinutes.toString().padStart(2, '0')}:${updateSeconds.toString().padStart(2, '0')}`

            document.querySelector("#time").innerHTML = updateFormattedTime
    
        },1000)
    }

    

    cronometro()

    anime({ // animaciones de Principal
        targets: '#cronometro',
        translateY: 50,
        opacity: [0, 1],
        duration:1000,
        easing: "easeOutElastic(0.5, 1)"
    });

    anime({ // animaciones de Principal
        targets: '#entry',
        translateY: 50,
        opacity: [0, 1],
        duration:2000,
        easing: "easeOutElastic(0.5, 1)"
    });

    anime({ // animaciones de Principal
        targets: '#local',
        translateY: 50,
        opacity: [0, 1],
        duration:3000,
        easing: "easeOutElastic(0.5, 1)"
    });

    anime({ // animaciones de Principal
        targets: '#desfichar',
        translateY: 50,
        opacity: [0, 1],
        duration:4000,
        easing: "easeOutElastic(0.5, 1)"
    });

}

export default timeup

/* if(localStorage.getItem("historico") === null){
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
 } */