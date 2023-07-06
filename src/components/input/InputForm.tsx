import React from 'react';
import * as A from './InputFormStyle';
import {typesItem} from '../../data/tipagem/typesItem';

type props={
    addInList : (newItem : typesItem) => void;
}
export const InputForm = ({addInList}:props)=>{
    const handleAdd = ()=>{
        addInList({
            date: new Date(2023, 6, 6),
            category : 'food',
            title : 'Gorduroso',
            value : 30.00
        })
    }
    return(
        <>
            <A.container>            
                <form>
                    <input type='date'/>
                    <input type='text'/>
                    <input type='text'/>
                    <input type='text'/>
                    
                </form>
                <A.buttom onClick={handleAdd}>Adicionar</A.buttom>
            </A.container>
        </>
    )

  
}