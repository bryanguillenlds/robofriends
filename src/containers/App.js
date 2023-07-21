import React, {  useState, useEffect } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import './App.css';

function App() {
  // State to store the robots and a method to set those robots.
  // Initial state for robots is an empty array.
  const [robots, setRobots] = useState([]);
  //Same for the search field
  const [searchField, setSearchField] = useState('');

  // Fetch the robots from the API by hooking into useEffect.
  // This method runs after rendering.
  // Will use this method to update the state of the component with actual API data
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
  }, []);   

  // Method to react to 'onChange' event in the input inside the SearchBox Component
  // Making it an arrow function to be able to use 'this' in the context of this component.
  // Otherwise, it would refer to the component where the method is called/triggered.
  const onSearchChange = (event) => {
    // Setting the state of the search field to be what the user typed
    // this.setState is built into React to update the state of the component
    setSearchField(event.target.value);
  }

  // Filter the robots according to searchfiled input.
 const filteredRobots = robots.filter((robot) => {
   // Return true if robot.name includes the searchfield value (what the user typed in the search box)
   return robot.name.toLowerCase().includes(searchField.toLowerCase());
 });

 // Show loading text if there are no robots yet. Otherwise, render.
 if (!robots.length) {
   return <h1 className='tc'>Loading...</h1>;
 } else {
   return (
     <div className='tc'>
       <h1 className='f1'>RoboFriends</h1>
       <SearchBox searchChange={onSearchChange}/>
       <Scroll>
         <ErrorBoundary>
           <CardList robots={ filteredRobots }/>
         </ErrorBoundary>
       </Scroll>
     </div>
   );

 }
}

export default App;