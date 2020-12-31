import React,{Component} from 'react';
import {WEATHERAPI} from './weatherAPI';
import HeaderWeather from './headerWeather';
import {CircularProgress} from '@material-ui/core';
import CurrentWatherCard from './currentWatherCard'




class FirstHome extends Component{
    constructor(props){
        super(props)
        this.state={
            city:'kathmandu',
            WeatherData:{},
            isloading:true
        }
    }

    componentDidMount(){
        this.getWeatherData();
    }


    getWeatherData=()=>{
         let self=this;
        WEATHERAPI.getCurrentWeatherData('kathmandu').
        then(function(response){
            console.log(response.data)
            self.setState({
                WeatherData:response.data,
                isloading:false
            })

        });
    }


    

    
    render(){
        return(
            <div>
                <HeaderWeather/>
                {this.state.isloading? <CircularProgress/>:
            <div> 
                <CurrentWatherCard data={this.state.WeatherData}/>
                
            </div>
            }
            </div>
        );
    }
}
export default FirstHome
