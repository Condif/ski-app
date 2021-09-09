import {useState} from 'react';

const useInput = (initialValue) => {
   const [value, setValue] = useState(initialValue);

    function handleChange(e){
        setValue(e.target.value);
    }

   return [value, handleChange];
}

const useDropdown = (initialValue) => {
    const [value, setValue] = useState(initialValue);
 
     function handleChange(item){
         setValue(item);
     }
 
    return [value, handleChange];
 }
 

export {useInput, useDropdown};