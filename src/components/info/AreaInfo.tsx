import React from 'react';
import * as A from './style';
import {monthYearString} from '../../helpers/dateFilter';

type props={
    filterDate: string;
    onMonthChange: (newMonth)=> void;
    revenues: number;
    expenses: number;
}

export const AreaInfo = ({filterDate, onMonthChange, revenues, expenses}:props) =>{
    const handlePrevMonth = () =>{
        let [year, month] = filterDate.split('-');
        let prevMonth = new Date(parseInt(year), parseInt(month) - 1, 1);        
        prevMonth.setMonth(prevMonth.getMonth()-1)
        onMonthChange(`${prevMonth.getFullYear()} - ${prevMonth.getMonth() + 1}`);
        
    }
    const handleNextMonth = () =>{
        let [year, month] = filterDate.split('-');
        let prevMonth = new Date(parseInt(year), parseInt(month) - 1, 1);        
        prevMonth.setMonth(prevMonth.getMonth()+1)
        onMonthChange(`${prevMonth.getFullYear()} - ${prevMonth.getMonth()+1}`);
    }
    return(
    <>
        <A.container>
            
            <A.filterMonth>
                <A.filterMonthArrow onClick={handlePrevMonth}>⬅️</A.filterMonthArrow>
                    <A.displayFilter>{monthYearString(filterDate)}</A.displayFilter>
                <A.filterMonthArrow onClick={handleNextMonth}>➡️</A.filterMonthArrow>
            </A.filterMonth>

            <A.resumeInfo>
                    sasasasasa
            </A.resumeInfo>
            

            
        </A.container>


    </>


)
}