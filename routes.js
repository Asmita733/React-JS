import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import MaterialHome from './material-xample/materialHome';
import FirstHome from "./weatherExample/firsthome";
import MyFirstHook from './hookComponent/firstHook';

import ThirdHook from './hookComponent/thirdHook';
import UserProfile from './hookComponent/userProfile';
import EffectHookExample from './hookComponent/effectHook';
import TimerApp from './timer/timerApp';
import ApiCallExampleHook from './hookComponent/apicallExample';


  class Routes extends Component{
      render(){
          return(
            <div>

<Router>
     

       
        <Switch>
         
            
           <Route path="/mui" exact>
           <MaterialHome/>
           </Route>
           <Route path="/weather" exact>
           <FirstHome/>
           </Route>
           <Route path="/hook" exact>
           <MyFirstHook/>
           </Route>
           <Route path="/th/:id" exact>
           <ThirdHook/>
           </Route>
           <Route path="/user" exact>
           <UserProfile/>
           </Route>
           <Route path="/effect" exact>
           <EffectHookExample/>
           </Route><Route path="/timer" exact>
           <TimerApp/>
           </Route>
           <Route path="/api-call-hook" exact>
           <ApiCallExampleHook/>
           </Route>
           
           
           
           
            
          
        </Switch>
      
    </Router>
            </div>

          );
        }
    }
    export default Routes