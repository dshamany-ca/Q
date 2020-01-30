import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ExampleComponent from './components/ExampleComponent';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar navItems={['home', 'about']} />
      <Switch>
        <Route exact path="/" component={ExampleComponent} />
        <Route exact path="/about" render={() => {
          return(
            <div>
              <h1>About</h1>
            </div>
          )
        }} />
      </Switch>
    </div>
  );
}

export default App;
