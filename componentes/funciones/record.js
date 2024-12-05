import {getWeek, getYear, getMonth, getDate} from 'date-fns'
import { da, es } from 'date-fns/locale'
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

