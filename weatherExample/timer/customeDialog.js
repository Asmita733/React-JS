import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function CustomeDialog(props){
    const [open,setOpen]=useState(false);

    function handleClose(){
        props.onCloseDialog()
        
    }
    useEffect(()=>{
setOpen(props.openDialog)
    },[props.openDialog])

    return(

        <div>
            <Dialog
        
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Alert!!</DialogTitle>
        <DialogContent>
          {props.dialogContent}
        </DialogContent>
        
      </Dialog>
        </div>
    )
}