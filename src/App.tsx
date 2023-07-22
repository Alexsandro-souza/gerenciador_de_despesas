import React from 'react';
import { useState, useEffect } from 'react';
import * as A from './App.styles';
import {category} from './data/category';
import {items} from './data/items';
import {typesItem} from './data/tipagem/typesItem';
import {typesCategory, typesCategoryObject} from './data/tipagem/typesCategory';
import {getCurrentMonth, filterListOfMonth} from './helpers/dateFilter';
import { Table } from './components/table/table';
import { AreaInfo } from './components/info/AreaInfo';
import {InputForm} from './components/input/InputForm';
import {Configuration} from './components/configuration/Configuration';


const App = () =>{
  const [itemsList, setItemsList] = useState(items);
  const [filterItemsList, setFilterItemsList] = useState <typesItem[]>([]);  
  const [currentDate, setCurrentDate] = useState(getCurrentMonth());
  const [expenses, setExpenses] = useState(0);
  const [revenues, setRevenues] = useState(0);
  const [categorys, setCategorys] = useState(category);
  const[colorBackground, setColorBackground] = useState('green')
  
  
  useEffect(()=>{
    setFilterItemsList(filterListOfMonth(itemsList, currentDate))
  }, [itemsList, currentDate])

  useEffect(()=>{
    let expenseCount = 0;
    let revenueCount = 0;
    
      for (let i in filterItemsList){
        if(categorys[filterItemsList[i].category].expense){
          expenseCount += filterItemsList[i].value
        }else{
          revenueCount += filterItemsList[i].value;   
        }        
      }
      setRevenues(revenueCount);
      setExpenses(expenseCount);
  }, [filterItemsList, itemsList]);



  const handleMonthChange = (newMonth:string)=>{
    setCurrentDate(newMonth)};

  const handleList = (newItem: typesItem) => {
    
    setItemsList(prevList =>[...prevList, newItem])};

  const handleCategory = (newCategory) =>{
    let arr = [...category, newCategory]
    setCategorys(arr)}

  const handleColor = (color) =>{
    setColorBackground(color);
  }



  return(
    <>
      <A.Container/>
        <A.Header color={colorBackground}>
          <A.HeaderText>Gerenciador Financeiro</A.HeaderText>
        </A.Header>
        <A.Body>

          <AreaInfo 
          onMonthChange ={handleMonthChange}
          filterDate ={currentDate}
          revenues = {revenues}
          expenses = {expenses}/>
            
          <Configuration color={handleColor} AddNewCategory={handleCategory}/>          

          <InputForm categorysList={categorys} addInList={handleList}/>
          
          <Table categorysList={categorys} list={filterItemsList}/>

        </A.Body>
      <A.Container/>
    </>

  )
}
export default App;