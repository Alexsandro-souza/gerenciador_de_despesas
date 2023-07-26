import React, {useState} from 'react';
import * as A from './ConfigurationStyle';
import ReactModal from  'react-modal';
import {FormModal} from './formModal';



export const Configuration = ({addNewCategory, color, colorLine})=>{
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleModal = ()=>{
        setModalIsOpen(!modalIsOpen);  
    }



    return(
        <>
        <A.configuration show={modalIsOpen.toString()} onClick={handleModal}></A.configuration>
        <ReactModal 
        isOpen={modalIsOpen}
        style={{
            overlay:{backgroundColor: 'rgba(196, 195, 195, 0.75)'},
            content:{
            top: '-10px',
            left: '0',
            right: '0',
            bottom: '60%',
            border: '1px solid black',
            borderRadius: '15px'
            }         
        }}
        >
            <FormModal 
            colorLine={colorLine} 
            color={color} 
            addNewCategory={addNewCategory} 
            onClickClose={()=>setModalIsOpen(false)}/>

        </ReactModal>
        </>

    )
}