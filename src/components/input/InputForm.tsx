import React, { useState } from 'react';
import * as A from './InputFormStyle';
import {typesItem} from '../../data/tipagem/typesItem';
import { category } from '../../data/category';
import {formatDate} from '../../helpers/dateFilter'
import {formatStringToNumber} from '../../helpers/FormatNumber/format';



type props={
    addInList : (newItem : typesItem) => void;
}

export const InputForm = ({addInList}:props)=>{
    const [date, setDate] = useState('');
    const [categorys, setCategory] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [value, setValue] = useState<string>('');


    let categoryKeys: string[] = Object.keys(category);


    const handleAdd = ()=>{
        addInList({
            date: formatDate(date),
            category : categorys,
            title : title,
            value : formatStringToNumber(value)
        })
        clear();
    }


    const clear = ()=>{
        setDate('');
        setCategory('');
        setTitle('');
        setValue('');
    }
    

    const handleChangeDate = (e)=>{
        const currentYear = new Date().getFullYear();
        const [year] = e.target.value.split('-')
        const yearNumber = parseInt(year)        
         if(currentYear < yearNumber){
            return alert('Selecine apenas o ano corrente ou anteriores!')
        }else{
            setDate(e.target.value)}
        } 
        
    const handleChangeCategory = (e)=> setCategory(e.target.value);
    
    const handleChangeTitle = (e)=> {
        const size = e.target.value.length;
        const regex = /^[ a-zA-ZÀ-ÿ]*$/;
        if(size > 22){
            alert('O título desse item é muito grande, por favor digite um menor!')
        }else if(!(regex.test(e.target.value))){
            alert('Por favor digite apenas texto!')            
        }else{
            setTitle(e.target.value)
        }
    }
    const handleChangeValue = (e)=> {
        let value = e.target.value;
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d)(\d{2})$/, '$1,$2');
        value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');
        setValue(value)
    
    }
  


    return(
        <>
            <A.container>            
                <form>
                <A.containerWrape>
                    <A.wrape>
                        <A.title>Data</A.title>
                        <A.input width={50} name='data' value={date} type='date' onChange={handleChangeDate}/>
                    </A.wrape>
                    <A.wrape>
                        <A.title>Categoria</A.title>
                        <A.inputCategory width={100} padding={0.5} name='categoria' value={categorys} onChange={handleChangeCategory}>
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
                        <A.input width={100} padding={1.4} name='titulo' value={title} type='text'onChange={handleChangeTitle}/>
                    </A.wrape>
                    <A.wrape>
                        <A.title>Valor</A.title>
                        <A.input width={60} padding={1.4} name='valor' value={value} type='text' onChange={handleChangeValue}/>
                    </A.wrape>
                </A.containerWrape>
                            
                    
                </form>
                <A.buttom onClick={handleAdd}>Adicionar</A.buttom>
            </A.container>
        </>
    )

  
}