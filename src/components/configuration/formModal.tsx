import React, {useState} from 'react';
import * as A from './formModalStyle';
import { typesCategoryObject } from '../../data/tipagem/typesCategory';
import { colorCategorys, colorBackground } from '../../data/color';

type props={
    onClickClose: ()=> void;
    AddNewCategory: (newCategory : typesCategoryObject)=> void;
    color : (value: string)=> void;
}

export const FormModal = ({onClickClose, AddNewCategory, color }: props)=>{
    const[category, setCategory] = useState('');
    const[expenseOrRevenues, setExpenseOrRevenues] = useState(false)
    const[colorCategory, setColorCategory] = useState('')

    const handleAdd = (e)=>{
        e.preventDefault();
        AddNewCategory({
            title : category,
            color : colorCategory, 
            expense : expenseOrRevenues
        });
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
        return color(e.target.value)}

    return(
        <>
        <A.container>
            <A.close onClick={onClickClose}>X</A.close>
            <A.call>Adicione novas categorias e cores de sua preferencia</A.call>
            <form>
                <A.wraper>
                    <label>Foto </label>
                    <A.input style={{width:'120px'}} type="file" />
                </A.wraper>
                <A.divider color={hadleChangeColoBackground}/>
                <A.wraper>
                    <label>Categoria </label>
                    <A.input value={category} onChange={handleChangeCategorys} type="text" />
                </A.wraper>
                <A.wraper>
                    <label>Essa categoria é uma despesa </label>
                    <A.select onChange={handleChangeExpenseOrRevenues}>
                        <option ></option>
                        <option >Sim</option>
                        <option >Não</option>
                    </A.select>
                </A.wraper>

                <A.wraper>
                    <label>Cor da categoria </label>
                    <A.select onChange={handleChangeColorCategorys}>
                    <option ></option>
                    {colorCategorys.map((item,index)=>{
                      return <option style={{background: item, color :'white' }} key={index}>{item}</option>
                    })}

                    </A.select>
                </A.wraper>
                <A.divider/>
                
                <A.wraper>
                    <label>Cor do background </label>
                    <A.select onChange={hadleChangeColoBackground}>
                    <option ></option>
                    {colorBackground.map((item,index)=>{
                      return <option style={{background: item, color :'white' }} key={index}>{item}</option>
                    })}

                    </A.select>
                </A.wraper>
                <A.button onClick={handleAdd}>Salvar</A.button>

            </form>   
        </A.container>
        
        </>
        

    )
}