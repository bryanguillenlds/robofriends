import React from "react";
import CardList from "./CardList.js";
import {robots} from "./robots.js";
import SearchBox from "./SearchBox.js";

class App extends React.Component {
  constructor() {
    // Need super in order to be able to use 'this' (using the constructor of React.Component)
    super();
    this.state = {
      robots: robots,
      searchField: ''
    };
  }

 render() {
   return (
     <div className='tc'>
       <h1>RoboFriends</h1>
       <SearchBox />
       <CardList robots={ this.state.robots }/>
     </div>
   );
 }
}

export default App;