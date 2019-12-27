import React, { Component } from 'react';
// import NavBarComponent from './components/NavBar.component';
import MainComponent from './components/Main.component';

class App extends Component {
  render() { 
    return ( 
      <div className="App">
        {/* <NavBarComponent/> */}
        <MainComponent/>
      </div>
     );
  }
}

export default App;