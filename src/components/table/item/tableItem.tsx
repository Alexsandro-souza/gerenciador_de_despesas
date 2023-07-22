import React from 'react';
import { newTypesItem } from '../../../data/tipagem/typesItem';
import { typesCategory } from '../../../data/tipagem/typesCategory';
import * as A from './style';
import {category} from '../../../data/category';
import {formatCurrency} from '../../../helpers/FormatNumber/format';

type props={
    item : newTypesItem;
    categorysList: typesCategory
}

export const TableItem = ({item, categorysList} : props) =>{

return(
    <>
    <A.tableLine>
        <A.tableCollumn>{item.date.toLocaleDateString()}</A.tableCollumn>
        <A.tableCollumn>
            <A.category color={categorysList[item.category].color}>
                {categorysList[item.category].title}
            </A.category>    
        </A.tableCollumn>
        <A.tableCollumn>{item.title}</A.tableCollumn>
        <A.tableCollumn>
            <A.value color={categorysList[item.category].expense ? 'red' : '#55ca80'}>
                R$ {formatCurrency(item.value)}
            </A.value>
        </A.tableCollumn>
    </A.tableLine>
    </> 
)

    
}