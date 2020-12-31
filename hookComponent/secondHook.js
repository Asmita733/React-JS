import React from 'react';

 export default function SecondHook(props){
     console.log(props)
    return(
        <div> second Componenet
        
         <img style={{width:'30%'}} src={props.imageURL}/>
         {props.name}
         <div>
             <img style={{width:500}} src={props.localImage}/>
         </div>

        </div>
        

    )
}