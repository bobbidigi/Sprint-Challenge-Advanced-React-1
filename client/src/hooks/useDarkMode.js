import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage.js'

export const useDarkMode = () => {
    const [someValue, setValue] = useLocalStorage('darkmode', true)

    useEffect(()=>{
        // let bodyclass = document.querySelector('body') 
        if(someValue){
          window.document.body.classList.add('dark-mode');
          console.log(window.document.body)
        }else{
          window.document.body.classList.remove('dark-mode');
          console.log(someValue)  
        }  
    })
    
    return [someValue, setValue]
}