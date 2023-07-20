import React from 'react';
import * as A from './AreaInfoStyle';
import {monthYearString} from '../../helpers/dateFilter';
import {Resume, ResumeDetour} from '../info/Resume';
import {valueFormatTotal, valueFormat, formatColor} from '../../helpers/FormatNumber/format';


type props={
    filterDate: string;
    onMonthChange: (prevMonth)=> void;
    revenues: number;
    expenses: number;
}

export const AreaInfo = ({filterDate, onMonthChange, revenues, expenses}:props) =>{
    const handlePrevMonth = () =>{
        let [year, month] = filterDate.split('-');        
        let prevMonth = new Date(parseInt(year), parseInt(month)-1, 1);       
        prevMonth.setMonth(prevMonth.getMonth()-1)
        onMonthChange(`${prevMonth.getFullYear()} - ${prevMonth.getMonth() + 1}`);
        
    }
    const handleNextMonth = () =>{
        let [year, month] = filterDate.split('-');        
        let prevMonth = new Date(parseInt(year), parseInt(month)-1, 1);       
        prevMonth.setMonth(prevMonth.getMonth()+1)
        onMonthChange(`${prevMonth.getFullYear()} - ${prevMonth.getMonth() + 1}`);
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
                    <Resume title={'Receitas'} value={valueFormat(revenues)}/>
                    <Resume title={'Despesas'} value={valueFormat(expenses)}/>
                    <ResumeDetour title={'Desvio'} value={valueFormatTotal(revenues,expenses)}
                    color={formatColor(revenues, expenses)}/>
            </A.resumeInfo>
            

            
        </A.container>


    </>


)
}