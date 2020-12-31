import React,{useEffect,useState} from 'react';

export default function EffectHookExample(){
    const[counter,setCounter]=useState(0);
    const[isCalled,setIsCalled]=useState(false);
    useEffect(()=>{
console.log('useeffect hook');
    },[isCalled]);
    return(<div>
        <div>
            This is a hook example{counter}
        </div>
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
        <button onClick={()=>setIsCalled(true)}>click</button>
        
        </div>
    )
}