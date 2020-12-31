import React, {Component} from 'react';
import Header from './header'
import FormExample from './formExample';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



class MaterialHome extends Component{
    constructor(props){
        super(props)
        this.state={
            open:false
        };
    }
    handleClose=()=>{
        this.setState({
           open:false 
        })
    }
    render(){
        return(
            <div>
                <Header/>
                
                <div style={{margin:'20px'}}>
                <FormExample/>
                </div>
                <div style={{margin:'20px'}}>
                <Button variant="contained" color="secondary"
                onClick={()=>this.setState({
                    open:true
                })}>
        OpenDialog
      </Button>
      </div>
                                       {/*Dialog*/}
      
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={this.handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

            </div>
        );
    }
}
export default MaterialHome;