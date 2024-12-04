import {getWeek, startOfWeek, endOfWeek, format, getYear, getMonth, getDate} from 'date-fns'
import { da, es } from 'date-fns/locale'
import { setDefaultOptions } from 'date-fns'
import main from '../principal/principal'

const record = () => {
    let entryTime = localStorage.getItem("tempTime")
    entryTime = Number(entryTime)
    const exitTime = new Date().getTime()
    const workedTime = exitTime - entryTime
    const workedYear = getYear (entryTime)
    const workedMonth = getMonth(entryTime) + 1
    const workedWeek = getWeek(entryTime, {weekStartsOn : 1})
    const workedDay = getDate(entryTime)
    const record = localStorage.getItem("record")
    const parseRecord = JSON.parse(record)
    
    if(record === null){
        const startRecord = {
            [workedYear]:{
                [workedMonth]:{
                    [workedWeek]:{
                        [workedDay] : workedTime
                    }
                }
            },
            2025: 2345
        }
        localStorage.setItem("record", JSON.stringify(startRecord))
        localStorage.removeItem("tempTime")
        main()
    }else{
        if(parseRecord[workedYear]){
            if(parseRecord[workedYear][workedMonth]){
                if(parseRecord[workedYear][workedMonth][workedWeek]){
                    if(parseRecord[workedYear][workedMonth][workedWeek][workedDay]){
                        
                        parseRecord[workedYear][workedMonth][workedWeek][workedDay] += workedTime
                    } else {
                        parseRecord[workedYear][workedMonth][workedWeek][workedDay] = workedTime
                    }
                }else{
                    parseRecord[workedYear][workedMonth][workedWeek] = {[workedDay]: workedTime}
                }
            }else{
                parseRecord[workedYear][workedMonth] = {[workedWeek]:{
                    [workedDay]:workedTime
                }}
            }    
        }else{
            parseRecord[workedYear]={[workedMonth]:{[workedWeek]:{[workedDay]: workedTime}}}
        }
        localStorage.setItem("record", JSON.stringify(parseRecord))
        localStorage.removeItem("tempTime")
        main()
    }
        
}

export default record

/* setDefaultOptions({locale: es})
    
    entryTime = Number(entryTime)

    let workedHours = (exitTime - entryTime) / (1000 * 60 * 60)
    workedHours = Math.floor(workedHours.toFixed(2))
    let workedMinutes = Math.floor((((exitTime-entryTime) % 3600000) / 60000))
    workedMinutes = Math.floor(workedMinutes.toFixed(2))
    const formattedWorkedHours = `${workedHours} horas y ${workedMinutes} minutos` 

    const week = getWeek(entryTime, {weekStartsOn: 1})
    const startWeek = startOfWeek(entryTime, {weekStartsOn: 1})
    const endWeek = endOfWeek(entryTime, {weekStartsOn: 1})
    const startFormatted = format(startWeek, 'd MMM', {locale: es})
    const endFormatted = format(endWeek, 'd MMM', {locale: es})
    const formattedWeek =` Semana: ${startFormatted}-${endFormatted}` */


    /* for (const year in parseRecord){
        for (const month in parseRecord[year]){
            for (const week in parseRecord[year][month]){
                for (const day in parseRecord [year] [month] [week]){
            
                  
                    
                }
            }
        }
    } */

       /*  {
            for (const year in parseRecord){
                if(year == workedYear){
                    for (const month in parseRecord[year]){
                        if(month == workedMonth){
                            for (const week in parseRecord[year][month]){
                                if(week == workedWeek){
                                    for (const day in parseRecord [year] [month] [week]){
                                        if(day == workedDay){
                                            const addTimeSameDay = parseRecord[year][month][week][day] + workedTime
    
                                            parseRecord[year][month][week][day] = addTimeSameDay
    
                                            localStorage.setItem("record", JSON.stringify(parseRecord))
                                        }else{
                                            parseRecord[year][month][week]=workedDay[workedTime]
                                        }   
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } */