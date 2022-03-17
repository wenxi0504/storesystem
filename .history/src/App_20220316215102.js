import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

class App extends Component{

  render(){
    return(

      <div><FontAwesomeIcon icon={regular('coffee')} /> App</div>
    )
  }
}

export default App;
