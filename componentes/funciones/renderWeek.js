import { getYear, getMonth, getWeek } from "date-fns";

const renderWeek = (titulo) => {

    const currentDate = new Date()
    const year = getYear(currentDate)
    const month = getMonth(currentDate) + 1
    const week = getWeek(currentDate, {weekStartsOn: 1})

    const record = localStorage.getItem("record")
    const parseRecord = JSON.parse(record)
    let countHoursPerWeek = 0

    if(!record){
        titulo.innerHTML = "No has trabajado esta semana"
    }else{
        if(parseRecord [year]){
            if(parseRecord [year] [month]){
                if (parseRecord [year] [month] [week]){
                   const hoursPerDay = Object.values(parseRecord[year] [month] [week]) 
                   for(const hourPerDay of hoursPerDay){
                    countHoursPerWeek += hourPerDay
                    }
                }
            }
        }
        const convertedHours = Math.floor(countHoursPerWeek / 3600000)
        const convertedMinutes = Math.floor((countHoursPerWeek / 1000) / 60)
    
        titulo.innerHTML = `${convertedHours.toString().padStart(2, '0')} horas y ${convertedMinutes.toString().padStart(2, '0')} minutos`
    
        if(convertedHours > 40){
            titulo.style.color = "red"
        }
    }
    
    
    
    
    
    
    
    
    
    

}

export default renderWeek