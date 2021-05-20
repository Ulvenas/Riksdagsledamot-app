import React, { Component } from 'react';
import './App.css';
import Party from './components/Party';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header"/>
          <Route exact path= "/" render={() => (
             <Redirect to="/Riksdagsledamoter-partier/Alla ledamöter"/>
           )}/>
            <Route path="/Riksdagsledamoter-partier/:parti" component={Party} />
          </div>
      </Router>
    );
  }
}

export default App;
