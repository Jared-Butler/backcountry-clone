import React, { Component } from 'react';
import './App.css';
import './reset.css';
import Header from './components/Header/Header';
import routes from './routes';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  constructor(){
    super();
    this.state = {
     screenWidth: window.innerWidth
    }
  }

  render() {
    return (
     <CssBaseline>

         <div className="App">
          <Header />

          {routes}

         </div>
     </CssBaseline>
 
    );
  }
}

export default App;
