import React from 'react';
import * as A from './style';
import { typesItem } from '../../data/tipagem/typesItem';
import {TableItem} from '../table/item/tableItem';

type props = {
    list : typesItem[]
}

export const Table = ({list} : props) =>{
    
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
                   
                    <TableItem item={item} key={index}/>
                ))}
                

                    
            </tbody>
        </A.table>
    )
}