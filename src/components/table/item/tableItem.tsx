import React from 'react';
import { newTypesItem } from '../../../data/tipagem/typesItem';
import { typesCategory } from '../../../data/tipagem/typesCategory';
import * as A from './style';
import {formatCurrency} from '../../../helpers/FormatNumber/format';

type props={
    item : newTypesItem;
    categorysList: typesCategory
    colorLineTable: string;
}

export const TableItem = ({item, categorysList, colorLineTable} : props) =>{

return(
    <>
    <A.tableLine color={colorLineTable}>
        <A.tableDate>{item.date.toLocaleDateString()}</A.tableDate>
        <A.tableCategory >
            
            <A.category color={categorysList[item.category].color}>
                {categorysList[item.category].title}
            </A.category>    
        </A.tableCategory>
        <A.tableTitle >{item.title}</A.tableTitle>
        <A.tableValue>
            <A.value color={categorysList[item.category].expense ? 'red' : '#55ca80'}>
                R$ {formatCurrency(item.value)}
            </A.value>
        </A.tableValue>
    </A.tableLine>
    </> 
)

    
}