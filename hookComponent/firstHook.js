import React,{useState} from 'react';
import SecondHook from './secondHook';
import Black from '../images/image.jpg';
import { useHistory } from 'react-router-dom';




export default function MyFirstHook(){
    let history=useHistory();
    const[IsOn,setIsOn]=useState(false);
    const [imageUrl,setImageUrl]=useState('https://m.media-amazon.com/images/I/61NzQ8TBE+L._AC_SY679_.jpg');
    
    
    function LightOn(){
        if(IsOn){
           setImageUrl ('https://m.media-amazon.com/images/I/61NzQ8TBE+L._AC_SY679_.jpg');

        }else{
            setImageUrl('https://cdn.mos.cms.futurecdn.net/8URLqwFeJihbNpn3gByhg3-1200-80.jpg');
        }
         setIsOn(!IsOn);
    }
       return(
           
        <div>
            <img  style={{width:'30%'}} onClick={()=>
            LightOn()}
            src={imageUrl}/>
            <button onClick={()=>history.push('th/hi')}>Here</button>
            
        
        <SecondHook imageUrl={imageUrl} name="This is asmita" localImage={Black}/>
        
        </div>
    );
}