import React, { ReactNode } from 'react';
import * as A from './stylemodal';


type props ={
    children: ReactNode,
    isOpenModal: boolean

}
export const Modal = ({children, isOpenModal}: props)=>{

    return(
            <A.modalOverlay isOpen={isOpenModal}>
                <A.modal>
                    {children}
                </A.modal>
            </A.modalOverlay>
        
      )

}


    