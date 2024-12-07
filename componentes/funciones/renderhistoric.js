import { getMonth, format, getYear, getWeek, startOfWeek, endOfWeek, addWeeks, startOfYear} from "date-fns"
import { da, es } from "date-fns/locale"

 export const tituloMes = (titulo) => {//funcion para pinta el me actual en historico
    
    const currentDate = new Date()
    const formatedMonth = format(currentDate, "MMMM", {locale: es})
    titulo.innerHTML = formatedMonth.toUpperCase()
}

export const count = (diasTotales, horas) => {//funcion para calcular los dias y horas trabajdas del mes
    
    const currentDate = new Date()
    const year = getYear(currentDate)
    const month = getMonth(currentDate) + 1

    const record = localStorage.getItem("record")
    const parseRecord = JSON.parse(record)
    let horasMes = 0
    let totalDias = ""
    
    if(parseRecord [year]){//si el anio del objeto del local estorage coincide con el anio actul...
        if (parseRecord [year] [month]){//si el anio y mes del objeto coincide con el anio y me actual
            const meses = Object.values(parseRecord [year] [month])//buscamos los valores de este coicidencia/mes...el resultado esperado son los objetos con los dias y horas trabajados por semanas

            meses.forEach(mes => {//por cada uno de estos valores, buscamos los valores mas adentro...esperando obtener un objeto por cada dia/horas trabajadas por cada semana
                const dias = Object.values(mes)//el valor en horas como tal de cada dia
                 totalDias = dias.length //las cantidad de dias totales que entren en este array(cantidad de valores), seran por defecto entonces nuestra cantidad de dias trabajados
                
                
                dias.forEach(horas => {//iteramos en cada dia para crear un array de horas totales
                    
                horasMes += horas//sumamos todo
                })
            })
        }
    }

    const formatedHours = Math.floor(horasMes / 3600000)
    const formattedMinutes = Math.floor((horasMes % 3600000) / 60000)
    const horasTotalesFormatted = `${formatedHours}h ${formattedMinutes}m`
    //formateamos las horas ya que viene de un epoch time
    diasTotales.innerHTML = totalDias//pa dentro ya
    horas.innerHTML = horasTotalesFormatted//pa dentro ya ostia
}

export const showWeeksList = (lista) => {//esta funcion pinta una lista con los rangos de semanas y las horas trabajadas en esos rangos y los pinta en el div showlist
    
    
    const record = localStorage.getItem("record")
    const recordParse = JSON.parse(record)
    //recuperamos el objeto de datos y lo parseamos
    Object.keys(recordParse).forEach(year => {
        year = Number(year)
        
        Object.values(recordParse[year]).forEach(week => {
            //altura de la semana
            let sumaHorasSemanas = 0
            const weekNumber = Object.keys(week)
            
            Object.values(week).forEach(day => {
                Object.values(day).forEach(hour => {
                    sumaHorasSemanas += hour
                })
            })
           
            weekNumber.forEach(value =>{
                value = Number(value)
                
                const inicioYear = startOfYear(new Date(year, 0, 1))
                const weeksNumber = addWeeks(inicioYear, value - 1)
                const inicioSemana = startOfWeek(weeksNumber, {weekStartsOn: 1})

                const finSemana = endOfWeek(weeksNumber, {weekStartsOn: 1})
                   
                const inicioSemanaFormatted = format(inicioSemana, "ddMMM", {locale: es}).toLowerCase()

                const finSemanaFormatted = format(finSemana, "ddMMM", {locale: es}).toLowerCase()

                const weekFormatted = `${inicioSemanaFormatted}-${finSemanaFormatted}`

                const sumaHoursConvertted = Math.floor(sumaHorasSemanas / 3600000)

                const sumaMinutesConvertted = Math.floor((sumaHorasSemanas % 3600000) / 60000) 

                const SumaTotalFormatted = `${sumaHoursConvertted}h ${sumaMinutesConvertted}m`

                const liWeek = document.createElement("li")
                const h4WeekRange = document.createElement("h4")
                const h4HoursPerWeekRange = document.createElement("h4")

                h4WeekRange.innerHTML = weekFormatted 
                h4HoursPerWeekRange.innerHTML = SumaTotalFormatted
                liWeek.appendChild(h4WeekRange)
                liWeek.appendChild(h4HoursPerWeekRange)

                lista.appendChild(liWeek)
            })
        })
    })
   
}

export const showDayList = (dayList) => {
    
}