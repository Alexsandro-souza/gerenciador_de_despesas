import React from 'react';
import * as A from './style';
import { newTypesItem } from '../../data/tipagem/typesItem';
import { typesCategory } from '../../data/tipagem/typesCategory';
import {TableItem} from '../table/item/tableItem';

type props = {
    list : newTypesItem[];
    categorysList: typesCategory
}

export const Table = ({list, categorysList} : props) =>{
    
    return(
        <A.table>
            <thead>
                <tr>
                    <A.tableHeadColumn width={180}>Data</A.tableHeadColumn>
                    <A.tableHeadColumn width={180}>Categoria</A.tableHeadColumn>
                    <A.tableHeadColumn>Título</A.tableHeadColumn>
                    <A.tableHeadColumn width={180}>Valor</A.tableHeadColumn>             
                     
                </tr>
            </thead>
            
            <tbody>
                {list.map((item, index)=>(         
                    <TableItem categorysList={categorysList} item={item} key={index}/>
                ))}
                

                    
            </tbody>
        </A.table>
    )
}