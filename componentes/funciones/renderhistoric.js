import { getMonth, format, getYear } from "date-fns"
import { es } from "date-fns/locale"

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



 

