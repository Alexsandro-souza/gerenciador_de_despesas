import React from 'react';
import { useState, useEffect } from 'react';
import * as A from './App.styles';
import {category} from './data/category';
import {items} from './data/items';
import {typesCategory} from './data/tipagem/typesCategory';
import {typesItem} from './data/tipagem/typesItem';
import {getCurrentMonth, filterListOfMonth} from './helpers/dateFilter';
import { Table } from './components/table/table';
import { AreaInfo } from './components/info/AreaInfo';

 const App = () =>{
  const [itemsList, setItemsList] = useState(items);
  const [filterItemsList, setFilterItemsList] = useState <typesItem[]>([]);
  const [currentDate, setCurrentDate] = useState(getCurrentMonth());
  const [expenses, setExpenses] = useState(0);
  const [revenues, setRevenues] = useState(0);

  
  useEffect(()=>{
      setFilterItemsList(filterListOfMonth(itemsList, currentDate))

  }, [itemsList, currentDate])

  const handleMonthChange = (newMonth:string)=>{
    setCurrentDate(newMonth)

  }

  return(
    <>
      <A.Container/>
        <A.Header>
          <A.HeaderText>Gerenciador Financeiro</A.HeaderText>
        </A.Header>
        <A.Body>
          <AreaInfo 
          onMonthChange={handleMonthChange}
          filterDate={currentDate}
          revenues = {revenues}
          expenses = {expenses}
          />
          
          
          {/*inserções*/}
          
          
          <Table list={filterItemsList}/>

            <h2>{currentDate}</h2>
            

        </A.Body>
        
        
      <A.Container/>
     
      

    
    </>

  )

}
export default App;