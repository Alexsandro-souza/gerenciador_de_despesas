import React from 'react';
import * as A from './formModalStyle';



export const FormModal = ({onClickClose})=>{


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
                <A.divider/>
                <A.wraper>
                    <label>Categoria </label>
                    <A.input type="text" />
                </A.wraper>
                <A.wraper>
                    <label>Cor da categoria </label>
                    <A.input type="color" style={{width:'30px', cursor: 'pointer', border: 'unset'}}/>
                </A.wraper>
                <A.divider/>
                
                <A.wraper>
                    <label>Cor do background </label>
                    <input type="color" style={{width:'30px', cursor: 'pointer', border: 'unset'}}/>
                </A.wraper>
                <A.button>Salvar</A.button>

            </form>   
        </A.container>
        
        </>
        

    )
}