import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import MusicPlayer from './music_player/music_player';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from '../components/splash'

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   return(
    <div>
        <ProtectedRoute exact path='/browse/featured' component={MusicPlayer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <Route exact path="/" component={GreetingContainer} />
        <Route exact path="/" component={Splash} />
    </div>
   )
  } 
}    

export default App;