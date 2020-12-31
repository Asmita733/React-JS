import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
class CurrentWatherCard extends Component{
    render(){
        let weather=this.props.data
        return(
            <div>
               <Card>
              <div style={{color:'#eb6e4b', fontSize:20}}>
                  {new Date().toDateString()}
              </div>
              <div style={{fontSize:20, fontWeight:900,marginTop:8}} >
                  {weather.name},{weather.sys.country}
              </div>
              <div style={{marginTop:10}}>
                  SunRise:{new Date(weather.sys.sunrise*1000).toLocaleString()}
              </div>
              <div style={{marginTop:10}}>
                  SunSet:{new Date(weather.sys.sunset).toLocaleString()}
              </div>
             
              <Grid container  spacing={2} style={{marginTop:20}}>
              <Grid  item xs='3' sm='2' style={{marginTop:10}}>
              <div>Temperature</div>
              <div>{weather.main.temp}</div>
              </Grid>
              <Grid  item xs='3' sm='2' style={{marginTop:10}}>
              <div>Minimum Temperature</div>
              <div>{weather.main.temp_min}</div>
              </Grid>
              <Grid  item xs='3' sm='2' style={{marginTop:10}}>
              <div>Maximum Temperature</div>
              <div>{weather.main.temp_max}</div>
              </Grid>
              <Grid  item xs='3' sm='2' style={{marginTop:10}}>
              <div>Pressure</div>
              <div>{weather.main.pressure}</div>
              </Grid>
              <Grid  item xs='3' sm='2' style={{marginTop:10}}>
              <div>Humidity</div>
              <div>{weather.main.humidity}</div>
              </Grid>
              

              </Grid>
                </Card>
            </div>
        );

    }
}
export default CurrentWatherCard