import React from 'react';
import * as A from '../info/ResumeStyle'

type props ={
    title: string;
    value: number;
    color?: string;

}

export const Resume= ({title, value, color}: props)=>{


    return(
        <>
            <A.container>
                <A.title>{title}</A.title>
                <A.value color={ color}>R$ {value}</A.value>
            </A.container>    
        </>

    )
}