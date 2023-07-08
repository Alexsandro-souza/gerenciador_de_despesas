import React, { useState } from 'react';
import * as A from './InputFormStyle';
import {typesItem} from '../../data/tipagem/typesItem';
import { category } from '../../data/category';




type props={
    addInList : (newItem : typesItem) => void;
}
export const InputForm = ({addInList}:props)=>{
    const [date, setDate] = useState('');
    const [categorys, setCategory] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [value, setValue] = useState<string>();


    let categoryKeys: string[] = Object.keys(category);


    const handleAdd = ()=>{


        
        addInList({
            date: formatDate(date),
            category : categorys,
            title : title,
            value : parseFloat(value)
        })
        clear();
    }

    const clear = ()=>{
        setDate('');
        setCategory('');
        setTitle('');
        setValue('');
    }

    

    const formatDate = (date)=>{        
        let [year, month, day] = date.split('-')        
        return new Date(parseInt(year), parseInt(month)-1, parseInt(day))            
    }

    const handleChangeDate = (e)=>{setDate(e.target.value)}
    const handleChangeCategory = (e)=> setCategory(e.target.value);
    const handleChangeTitle = (e)=> setTitle(e.target.value);
    const handleChangeValue = (e)=> setValue(e.target.value);
  


    return(
        <>
            <A.container>            
                <form>
                <A.containerWrape>
                    <A.wrape>
                        <A.title>Data</A.title>
                        <A.input  name='data' value={date} type='date' onChange={handleChangeDate}/>
                    </A.wrape>
                    <A.wrape>
                        <A.title>Categoria</A.title>
                        <A.inputCategory padding={0.5} name='categoria' value={categorys} onChange={handleChangeCategory}>
                            <>
                            <A.optionCategory></A.optionCategory>
                            {categoryKeys.map((item,index)=>{
                            return <A.optionCategory key={index} value={item} >{category[item].title}</A.optionCategory>
                                
                            })}
                            </>
                        </A.inputCategory>
                    </A.wrape>
                    <A.wrape>
                        <A.title>Titulo</A.title>
                        <A.input padding={1.4} name='titulo' value={title} type='text'onChange={handleChangeTitle}/>
                    </A.wrape>
                    <A.wrape>
                        <A.title>Valor</A.title>
                        <A.input padding={1.4} name='valor' value={value} type='text' onChange={handleChangeValue}/>
                    </A.wrape>
                </A.containerWrape>
                            
                    
                </form>
                <A.buttom onClick={handleAdd}>Adicionar</A.buttom>
            </A.container>
        </>
    )

  
}