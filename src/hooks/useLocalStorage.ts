import { useState,useEffect } from "react";
export function useLocaStorage<T>(key:string, initialValue: T | (()=>T
)){
    const [value, setValue]=useState <T>(()=>{
        const jsonValu= localStorage.getItem(key)
        if(jsonValu != null){
            return JSON.parse(jsonValu)
        }if(typeof initialValue === 'function'){
            return initialValue as ()=>T
        }else{
            return initialValue
        }
    })

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return[value, setValue] as [typeof value, typeof setValue]
}