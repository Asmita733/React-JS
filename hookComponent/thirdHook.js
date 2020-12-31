import React from 'react';
import {useHistory,useParams} from 'react-router-dom';
 export default function ThirdHook(){
     let history=useHistory()
     let params=useParams();
     console.log(history);
     console.log(params);
    return(
        <div>
            Hello everyone<br/>
            params:{params.id}
        </div>
    )
}