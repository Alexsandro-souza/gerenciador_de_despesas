import React from 'react';
import { newTypesItem } from '../../../data/tipagem/typesItem';
import * as A from './style';
import {category} from '../../../data/category';
import {formatCurrency} from '../../../helpers/FormatNumber/format';

type props={
    item : newTypesItem
}

export const TableItem = ({item} : props) =>{

return(
    <>
    <A.tableLine>
        <A.tableCollumn>{item.date.toLocaleDateString()}</A.tableCollumn>
        <A.tableCollumn>
            <A.category color={category[item.category].color}>
                {category[item.category].title}
            </A.category>    
        </A.tableCollumn>
        <A.tableCollumn>{item.title}</A.tableCollumn>
        <A.tableCollumn>
            <A.value color={category[item.category].expense ? 'red' : '#55ca80'}>
                R$ {formatCurrency(item.value)}
            </A.value>
        </A.tableCollumn>
    </A.tableLine>
    </> 
)

    
}