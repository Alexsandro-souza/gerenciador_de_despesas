import React from 'react';
import * as A from '../info/ResumeStyle'

type props ={
    title: string;
    value: number | string;
    color?: string;

}

export const Resume= ({title, value}: props)=>{


    return(
        <>
            <A.container>
                <A.title>{title}</A.title>
                <A.value>R$ {value}</A.value>
            </A.container>    
        </>

    )
}

export const ResumeDetour= ({title, value, color}: props)=>{


    return(
        <>
            <A.container>
                <A.title>{title}</A.title>
                <A.valueDetour color={color}>R$ {value}</A.valueDetour>
            </A.container>    
        </>

    )
}