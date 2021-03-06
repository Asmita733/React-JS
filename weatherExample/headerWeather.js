import React ,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';






class HeaderWeather extends Component{
    constructor(props){
        super(props)
        this.state={
            openDrawer:false
        };
    }
    render(){
        return(
            <div>
                <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu"
           onClick={()=>this.setState({openDrawer:true})}>
           <MenuIcon/>
            
          </IconButton>
          <Typography variant="h6" >
            Weather Data
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Drawer anchor='left' open={this.state.openDrawer}
      onClose={()=>
      this.setState({openDrawer:false})} >

<List>
        {['Home', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
            
      </Drawer>
            </div>
        );
    }
}
export default HeaderWeather