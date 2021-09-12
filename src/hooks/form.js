import {useState} from 'react';

const useInput = (initialValue) => {
   const [value, setValue] = useState(initialValue);

    function handleChange(e){
        setValue(e.target.value);
    }

   return [value, setValue, handleChange];
}

const useDropdown = (initialValue) => {
    const [value, setValue] = useState(initialValue);
 
     function handleChange(item){
         setValue(item);
     }
 
    return [value, setValue, handleChange];
 }
 

export {useInput, useDropdown};