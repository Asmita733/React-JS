import React,{useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CustomeDialog from './customeDialog';

export default function TimerApp(){
    const[time,setTime]=useState();
    const [timer,setTimer]=useState();
    const[isAlert,setIsAlert]=useState(false);
    const[openDialog,setOpenDialog]=useState('false');
    let [secondCount,setSecondCount]=useState(0);
    
    

    function handleChange(event){
        setTime(event.target.value);
    }
    function runTimer(){
         
        setTimer(setInterval(function(){
            if(secondCount==time){
               
                setIsAlert(!isAlert);
                setSecondCount(0);
                setTime(0);
                setOpenDialog('true');
                
                
            }else{
                setSecondCount(secondCount++);
            }
        },1000));
    }

    useEffect(()=>{
        clearInterval(timer);
    },[isAlert])
    function OnCloseDialog(){
        setOpenDialog(false);
    }

    return(
        <div style={{maxWidth:300,margin:'auto'}}>
            <h1>Timer app</h1>
            <div>
            <Grid container  spacing={2}>
         
            <Grid item xs="9" sm="9" >
            
      <TextField id="time" 
                 value={time}
                 onChange={handleChange}
                label="Please Select your Time"
                variant="filled"
                helperText="Set timer on the basis of seconds"
                fullWidth={true}
                type="number"
                 />
                 
                   
            </Grid>
            <Grid item xs="3" sm="3">
            <Button onClick={runTimer}>Start Timer</Button>
            </Grid>
        
        </Grid>
        <div style={{textAlign:'center'}}>
            <Card><h1>{secondCount}</h1>
            </Card>
        </div>
      
                 
      
            </div>
            <CustomeDialog openDialog={openDialog} onCloseDialog={OnCloseDialog}
            dialogContent={<div>
                Alert!!! its time now
            </div>}
            />
           
        </div>
    )
}