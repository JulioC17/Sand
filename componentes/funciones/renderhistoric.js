import { getMonth, format, getYear, getWeek } from "date-fns"
import { es } from "date-fns/locale"

 export const tituloMes = (titulo) => {
    
    const currentDate = new Date()
    const formatedMonth = format(currentDate, "MMMM", {locale: es})
    titulo.innerHTML = formatedMonth.toUpperCase()
}

export const count = (dias, horas) => {
    
    const currentDate = new Date()
    const year = getYear(currentDate)
    const month = getMonth(currentDate) + 1
    const week = getWeek(currentDate, {weekStartsOn: 1})

    const record = localStorage.getItem("record")
    const parseRecord = JSON.parse(record)
    let horasMes = 0
    let diasMes = 0
    
    if(parseRecord [year]){
        if (parseRecord [year] [month]){
            const meses = Object.values(parseRecord [year] [month])

            meses.forEach(mes => {
                const dias = Object.values(mes)
                console.log(mes);
                
                dias.forEach(horas => {
                    horasMes += horas
                })
            })
        }
    }

    /* horas.innerHTML = horasMes
    console.log(horasMes); */
    
    //formatear las horas del mes
    

}

 

