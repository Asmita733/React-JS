import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CicularProgress from '@material-ui/core/CircularProgress';


export default function WeatherData(){
  const[newsData,setNewsData]=useState();
  const[pageState,setPageState]=useState({Loading:true ,error:false});

    useEffect(()=>{
        getWeatherAPIData()
    },[true])

    function getWeatherAPIData(){
        axios.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-29&sortBy=publishedAt&apiKey=57801a09bf764c199abf2d308c2cee9e').then(function(response){
        setNewsData(response.data);
        pageState.Loading=false;
        setPageState({...pageState,pageState});
        })
    }
    return(
        <div>{pageState.Loading?<CicularProgress/>:
                    <Grid container spacing={2}>
            {newsData.map((item)=>
           <Grid item xs='12' sm='12'>
             <Card >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" >
            R
          </Avatar>
        }
        
        title={item.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      </Card>
      
      </Grid>
    )}
    
      </Grid>
        }
        </div>
    )
}