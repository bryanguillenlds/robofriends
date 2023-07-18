import React from "react";
import CardList from "./CardList.js";
import SearchBox from "./SearchBox.js";
import Scroll from "./Scroll.js";
import './App.css';

class App extends React.Component {
  constructor() {
    // Need super in order to be able to use 'this' (using the constructor of React.Component)
    super();
    this.state = {
      robots: [],
      searchField: ''
    };
  }

  // Method to react to 'onChange' event in the input inside the SearchBox Component
  // Making it an arrow function to be able to use 'this' in the context of this component.
  // Otherwise, it would refer to the component where the method is called/triggered.
  onSearchChange = (event) => {
    // Setting the state of the search field to be what the user typed
    // this.setState is built into React to update the state of the component
    this.setState({searchField: event.target.value});
  }

  //Method to render the component. It can contain JSX code and also other components and data necessary for those components.
 render() {
   const filteredRobots = this.state.robots.filter((robot) => {
     // Return true if robot.name includes the searchfield value (what the user typed in the search box)
     return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
   });

   // Show loading text if there are no robots yet. Otherwise, render.
   if (this.state.robots.length === 0 ) {
     return <h1 className='tc'>Loading...</h1>;
   } else {
     return (
       <div className='tc'>
         <h1 className='f1'>RoboFriends</h1>
         <SearchBox searchChange={this.onSearchChange}/>
         <Scroll>
           <CardList robots={ filteredRobots }/>
         </Scroll>
       </div>
     );
   }
 }

 // Runs after render
  // Will use this method to update the state of the component with actual API data
 componentDidMount() {
   fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users => this.setState({robots: users}));}
}

export default App;