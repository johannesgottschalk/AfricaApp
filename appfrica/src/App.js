import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import TextAndExercises from './components/TextAndExercises';
import Exercises from './components/Exercises';
import Language from './components/Language';
import Login from './components/Login';
import Privacy from './components/Privacy';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import DisplayText from './components/DisplayText';


class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/textandexercises" component={TextAndExercises} exact/>
             <Route path="/displaytext" component={DisplayText}/>
             <Route path="/exercises" component={Exercises}/>
             <Route path="/login" component={Login}/>
             <Route path="/privacy" component={Privacy}/>
             <Route path="/language" component={Language}></Route>
           </Switch>
        </div> 
        <Footer />
      </BrowserRouter>
      
    );
  }
}
 
export default App;