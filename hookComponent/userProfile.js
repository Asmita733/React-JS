import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';



export default function UserProfile(){
    const [userProfile,setUserProfile]=useState({name:"",address:""})

    function handlechange(event){
        userProfile[event.target.id]=event.target.value;
        setUserProfile({...userProfile,userProfile});

    }
    return(
        <div>
            <Grid container  spacing={2}>
          
            <Grid  item sm="4" xs="6" >

<TextField id="name" 
                label="Enter name"
                color='secondary'
                variant='outlined'
                fullWidth={'true'}
                helperText="Please enter valid name"
                 value={userProfile.name}
                 onChange={handlechange}/>
              
            </Grid>
            <Grid  item sm="4" xs="6" >

<TextField id="address" 
                label="Enter name"
                color='secondary'
                variant='outlined'
                fullWidth={'true'}
                helperText="Please enter valid name"
                 value={userProfile.address}
                 onChange={handlechange}/>
              
            </Grid>
          
        </Grid>
        <Card>
        <Grid container  spacing={2}>
          
          <Grid  item sm="6" xs="6" >Name</Grid>
          <Grid  item sm="6" xs="4" >{userProfile.name}</Grid>
          </Grid>

          <Grid container  spacing={2}>
          
          <Grid  item sm="6" xs="6" >Address</Grid>
          <Grid  item sm="6" xs="4" >{userProfile.address}</Grid>
          </Grid>
        </Card>
      
        </div>
    )
}