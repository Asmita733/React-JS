import React,{useEffect,useState} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import {CircularProgress} from '@material-ui/core';


export default function ApiCallExampleHook(){
    const[newsData,setNewsData]=useState();
    const[pageState,setPageState]=useState({Loading:true,error:false})

    useEffect(()=>{
        getNewsDataFromAPI();
    },[true]);

    function getNewsDataFromAPI(){
        axios.get('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=57801a09bf764c199abf2d308c2cee9e').then
        (function(response){
            setNewsData(response.data.articles)
            pageState.Loading=false
            setPageState({...pageState,pageState})
        })

    }
    return(
        <div>
            {pageState.Loading?<CircularProgress/>:
            <Grid container  spacing={2}>
            {newsData.map((item)=>
             <Grid item xs="4" sm="4" >
             <a target='_blank' href={item.url} style={{textDecoration:'none'}}>
             <Card >
         <CardHeader
           avatar={
             <Avatar aria-label="recipe" >
               Rjjj
             </Avatar>
           }
          
           title={item.title}
           subheader={new Date(item.publishedAt).toLocaleString()}
         />
         <CardMedia
           style={{ height: 0,
            paddingTop: '56.25%'}}
           image={item.urlToImage}
           title="Paella dish"
         />
         <CardContent>
           <Typography variant="body2" color="textSecondary" component="p">
             This impressive paella is a perfect party dish and a fun meal to cook together with your
             guests. Add 1 cup of frozen peas along with the mussels, if you like.
           </Typography>
         </CardContent>
         </Card>
         </a>
         </Grid>
            )}
         
        
        </Grid>
            }
        </div>
    )
}