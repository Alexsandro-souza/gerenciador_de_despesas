import { typesItem, newTypesItem } from "../data/tipagem/typesItem";



export const getCurrentMonth = () => {
    let newDate = new Date(); //Aqui será a data filtrada pelo o usuário
    return `${newDate.getFullYear()} - ${newDate.getMonth()+1}`
}


export const filterListOfMonth = (itemsList : typesItem[], currentDate : string): typesItem[] => {
    let newItemList : typesItem[] = [];
    let [year, month] = currentDate.split('-');

    for (let i in itemsList){
        if(
            itemsList[i].date.getFullYear() === parseInt(year) &&
            (itemsList[i].date.getMonth()+1) === parseInt(month)
        ){
            newItemList.push(itemsList[i])
        }
    }

    return newItemList;
}

export const monthYearString = (filterDate:string):string=>{
    let [year, month] = filterDate.split('-');
    const months =['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return `${months[parseInt(month)-1]} de ${year}`;
}

export const formatDate = (date)=>{        
    let [year, month, day] = date.split('-')

    return new Date(parseInt(year), parseInt(month)-1, parseInt(day))            
}