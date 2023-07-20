

export const getAllItemsFromLocalStorage = () => {
    const items = [];
  
    for (let i = 0; i < localStorage.length; i++) {
      const key  = localStorage.key(i);
      const value  = localStorage.getItem(key);
      const parsedValue = JSON.parse(value);
  
      items.push(parsedValue);
    }
  
    return items;
  };


  
