import React from 'react';
import * as A from './style';
import { newTypesItem } from '../../data/tipagem/typesItem';
import { typesCategory } from '../../data/tipagem/typesCategory';
import {TableItem} from '../table/item/tableItem';

type props = {
    list : newTypesItem[];
    categorysList: typesCategory
    colorLineTable: string;
}

export const Table = ({list, categorysList, colorLineTable} : props) =>{
    
    return(
        <A.container>
            <A.table>
                <A.tableHead>
                    <tr>
                        <A.tableHeadDate>Data</A.tableHeadDate>
                        <A.tableHeadCategory>Categoria</A.tableHeadCategory>
                        <A.tableHeadTitle>Título</A.tableHeadTitle>
                        <A.tableHeadValue>Valor</A.tableHeadValue>             
                        
                    </tr>
                </A.tableHead>
                
                <tbody>
                    {list.map((item, index)=>(         
                        <TableItem colorLineTable={colorLineTable} categorysList={categorysList} item={item} key={index}/>
                    ))}
                    

                        
                </tbody>
            </A.table>
        </A.container>
    )
}