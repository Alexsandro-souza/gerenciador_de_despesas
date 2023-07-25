import React, {useState} from 'react';
import * as A from './formModalStyle';
import { typesCategoryObject } from '../../data/tipagem/typesCategory';
import { colorCategorys, colorBackground } from '../../data/color';

type props={
    onClickClose: ()=> void;
    addNewCategory: (newCategory : typesCategoryObject)=> void;
    color : (value: string)=> void;
    colorLine : (value: string)=> void;
}

export const FormModal = ({onClickClose, addNewCategory, color, colorLine }: props)=>{
    const[category, setCategory] = useState('');
    const[expenseOrRevenues, setExpenseOrRevenues] = useState(false)
    const[colorCategory, setColorCategory] = useState('')

    const handleAdd = (e)=>{
        e.preventDefault();
        if(category === '' || colorCategory === ''){
            alert('Parace que algum campo da categoria não foi preenchido, por favor verifique.')
        }else if(category === '' && colorCategory === ''){
            alert('Parace que algum campo da categoria não foi preenchido, por favor verifique.')
        }
        addNewCategory({
            title : category,
            color : colorCategory, 
            expense : expenseOrRevenues
        });
        onClickClose();
    }
    
    const handleChangeCategorys = (e)=>{
        const size = e.target.value.length;
        const regex = /^[ a-zA-ZÀ-ÿ]*$/;
        if(size > 22){
            alert('O título desse item é muito grande, por favor digite um menor!')
        }else if(!(regex.test(e.target.value))){
            alert('Por favor digite apenas texto!')            
        }else{
            setCategory(e.target.value)}
    }

    const handleChangeExpenseOrRevenues = (e)=>{
        let value = e.target.value;
        if(value === 'Sim'){
        value = true;
        }else{
        value = false;
        }
        setExpenseOrRevenues(value);
    }

    const handleChangeColorCategorys = (e)=>{setColorCategory(e.target.value)}

    const hadleChangeColoBackground = (e)=>{
        onClickClose();
        return color(e.target.value)}

    return(
        <>
        <A.container>
            <A.close onClick={onClickClose}>X</A.close>
            <A.call>Personalise como preferir</A.call>
            <form>
                <A.divider colorLine={colorLine}/>
                <A.wraper>
                    <A.label>Foto de perfil</A.label>
                    <A.input style={{width:'120px'}} type="file" />
                </A.wraper>

                <A.wraper>
                    <A.label>Cor do background </A.label>
                    <A.select onChange={hadleChangeColoBackground}>
                    <option ></option>
                    {colorBackground.map((item,index)=>{
                      return <option style={{background: item, color :'white' }} key={index}>{item}</option>
                    })}
                    </A.select>
                </A.wraper>

                <A.divider colorLine={colorLine}/>
                
                <A.wraper>
                    <A.label>Nova Categoria </A.label>
                    <A.input value={category} onChange={handleChangeCategorys} type="text" />
                </A.wraper>
                <A.wraper>
                    <A.label>Essa categoria é uma despesa </A.label>
                    <A.select onChange={handleChangeExpenseOrRevenues}>
                        <option ></option>
                        <option >Sim</option>
                        <option >Não</option>
                    </A.select>
                </A.wraper>

                <A.wraper>
                    <A.label>Cor da categoria </A.label>
                    <A.select onChange={handleChangeColorCategorys}>
                    <option ></option>
                    {colorCategorys.map((item,index)=>{
                      return <option style={{background: item, color :'white' }} key={index}>{item}</option>
                    })}

                    </A.select>
                </A.wraper>
                <A.button onClick={handleAdd}>Salvar</A.button>
                <A.divider colorLine={colorLine}/>
            </form>   
        </A.container>
        
        </>
        

    )
}