import React, {useState} from 'react';
import * as A from './ConfigurationStyle';
import ReactModal from  'react-modal';
import {Gear} from '../gear/gear';
import { Modal } from '../modal/modal';
import {FormModal} from './formModal';



export const Configuration = ({addNewCategory, color, colorLine})=>{
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleModal = ()=>{
        setModalIsOpen(!modalIsOpen);  
    }



    return(
        <>
        <A.configuration onClick={handleModal}>
            <Gear/>
        </A.configuration>
        <Modal isOpenModal={modalIsOpen}>
            <FormModal 
            colorLine={colorLine} 
            color={color} 
            addNewCategory={addNewCategory} 
            onClickClose={()=>setModalIsOpen(false)}/>

        </Modal>
        </>

    )
}