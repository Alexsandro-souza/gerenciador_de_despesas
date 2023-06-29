import React from 'react';
import { useState, useEffect } from 'react';
import * as A from './App.styles';
import {category} from './data/category';
import {items} from './data/items';
import {typesCategory} from './tipagem/typesCategory';
import {typesItem} from './tipagem/typesItem';



export default function App (){
  const [itemsList, setItemsList] = useState(items);

    

  return(
    <>
      <A.Container/>
        <A.Header>
          <A.HeaderText>Gerenciador Financeiro</A.HeaderText>
        </A.Header>
        <A.Body>
          {/*Informações */}
          
          
          {/*inserções*/}
          
          
          {/*Tabela */}




        </A.Body>
        
        
      <A.Container/>
     
      

    
    </>

  )

}