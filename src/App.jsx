import * as A from './components/Styles'
import item from './Data/DataItem'
import { useState } from 'react'

export default function App (){
    const [list, setList] = useState(item);


    

  return(
    <>
      <A.Container/>
        <A.Header>
          <A.HeaderText>Gerenciador Financeiro</A.HeaderText>
        </A.Header>
        <A.Body>
          {/*Informações */}
          
          
          {/*inserções*/}
          
          
          {/*Tabela */}




        </A.Body>
        
        
      <A.Container/>
     
      

    
    </>

  )

}