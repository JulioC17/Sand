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
            
            Object.keys(week).forEach(weekNumber =>{
                let sumaHorasSemanas = 0
                weekNumber = Number(weekNumber)
                
                Object.values(week[weekNumber]).forEach(day => {
                            
                        sumaHorasSemanas += day
                        console.log(sumaHorasSemanas);
                        
                        
                    })
           
            const inicioYear = startOfYear(new Date(year, 0, 1))
            const weeksNumber = addWeeks(inicioYear, weekNumber - 1)
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
    //aqui
        })
    })
   
}

export const showDayList = (dayList) => {//esta funcion pinta por defecto en el div showlist todas las horas trabajadas por cada dia,
    
    const record = localStorage.getItem("record")
    const recordParse = JSON.parse(record)

    Object.keys(recordParse).forEach(year => {
        year = Number(year)
        
        Object.keys(recordParse[year]).forEach(month =>{
            month = Number(month)
            
            Object.values(recordParse[year][month]).forEach(week => {
               
                Object.entries(week).forEach(day => {
                
                    const dayHours = Math.floor(day[1] / 3600000)
                    const dayMinutes = Math.floor((day[1] % 3600000)/ 60000)
                
                    const dayHoursMinutesFormatted = `${dayHours}h ${dayMinutes}m`
                
                     day[0] = Number(day[0])
                
                    const nameMonth = new Date(year, month - 1, 1)
                    const nameMonthFormatted = format(nameMonth, "MMM-yyyy", {locale: es}).toLowerCase()

                    const allTogether = `${day[0]}-${nameMonthFormatted}`
                
                    const liDate = document.createElement("li")
                    const h4LiDate = document.createElement("h4")
                    const h4LiHours = document.createElement("h4")

                    h4LiDate.innerHTML = allTogether
                    h4LiHours.innerHTML = dayHoursMinutesFormatted
                
                    liDate.appendChild(h4LiDate)
                    liDate.appendChild(h4LiHours)
                
                    dayList.appendChild(liDate)
                })
            })
        })
    })
    
}

export const showMonthList = (monthList) =>{
    
    const record = localStorage.getItem("record")
    const recordParse = JSON.parse(record)

    Object.keys(recordParse).forEach(year => {
        year = Number(year)
        
        Object.keys(recordParse[year]).forEach(month => {
            month = Number(month)
            let sumaHourPerMonth = 0

            Object.values(recordParse[year][month]).forEach(week => {
                Object.values(week).forEach(day => {
                    sumaHourPerMonth += day
                })
            })
            
            const monthDate = new Date(year, month - 1, 1)
            const monthDateFormatted = format(monthDate, "MMM-yyyy", {locale:es}).toLowerCase()

            const monthHours = Math.floor(sumaHourPerMonth / 3600000)
            const monthMinutes = Math.floor((sumaHourPerMonth % 3600000) / 60000)

            const hoursMinutesFormatted = `${monthHours}h ${monthMinutes}m`

            const liMonthDate = document.createElement("li")
            const h4MonthDate = document.createElement("h4")
            const h4MonthHours = document.createElement("h4")
            
            h4MonthDate.innerHTML = monthDateFormatted
            h4MonthHours.innerHTML = hoursMinutesFormatted
            liMonthDate.appendChild(h4MonthDate)
            liMonthDate.appendChild(h4MonthHours)

            monthList.appendChild(liMonthDate)
            
        })
    })
}