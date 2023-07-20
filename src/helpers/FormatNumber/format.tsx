

export const valueFormat = (value)=>{
    let amauntString = String(value);
    amauntString = amauntString.replace(/\D/g, '');
    amauntString = amauntString.replace(/(\d)(\d{2})$/, '$1,$2');
    amauntString = amauntString.replace(/(?=(\d{3})+(\D))\B/g, '.')

    return amauntString
    
}

export const valueFormatTotal = (revenues, expenses)=>{
    const amaunt = revenues - expenses;
    let amauntString = String(amaunt);
    amauntString = amauntString.replace(/\D/g, '');
    amauntString = amauntString.replace(/(\d)(\d{2})$/, '$1,$2');
    amauntString = amauntString.replace(/(?=(\d{3})+(\D))\B/g, '.')
    
    return amauntString
    
}



export const formatStringToNumber = (value)=>{
    value = value.replace(/(\D)/g,'')   
    return parseFloat(value)   
}

export const formatCurrency = (str)=>{ 
    let formatCurrency = String(str);
    formatCurrency = formatCurrency.replace(/\D/g, '');
    formatCurrency = formatCurrency.replace(/(\d)(\d{2})$/, '$1,$2');
    formatCurrency = formatCurrency.replace(/(?=(\d{3})+(\D))\B/g, '.')
    
    return formatCurrency
   }
   
export const formatColor = (revenues, expenses)=>{
    let amaunt = revenues - expenses;
    let color = "";
    if(amaunt !== undefined && amaunt == 0){
       color = "black";
    }
    else if(amaunt !== undefined && amaunt < 0){
        color = "red";
    }else if(amaunt !== undefined && amaunt > 0){
        color = "#55ca80";
    }
    return String(color)
}
   