import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


class FormExample extends Component{
    constructor(props){
        super(props)
        this.state={
            name:''
        }
    };
    handleChange=(event)=>{
        this.setState({
            [event.target.id]:event.target.value
        })
    }
    render(){
        return(
            <div>


      
        <Grid container  spacing={2}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item >

<TextField id="name" 
                label="Enter name"
                color='secondary'
                variant='filled'
                fullWidth={'true'}
                helperText="Please enter valid name"
                 value={this.state.name}
                 onChange={this.handleChange}/>
              
            </Grid>
          ))}
        </Grid>
      
      
                
                 
            </div>
        );
    }
}
export default FormExample;