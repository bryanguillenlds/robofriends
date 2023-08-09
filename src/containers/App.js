import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import Header from '../components/Header.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import './App.css';

import { setSearchField, requestRobots} from '../actions.js';

// Method to map a state from the redux store reducers to the component props.
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

// Method to map a dispatch action to a component prop.
// This will react to 'onChange' event in the input inside the SearchBox Component.
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

function App(props) {
  // accessing from props passed by connect (react-redux)
  const { searchField, onSearchChange, robots, isPending, onRequestRobots } = props;

  // Fetch the robots from the API by hooking into useEffect.
  // Will use this method to update the state of the component with actual API data
  // This method runs after rendering. Every time, unless we tell it othewise.
  // The second argument, '[]', tells it how many times to run. If empty, it will run once.
  // If there was any value in the array, it would run every time one of those values changes.
  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  // Filter the robots according to searchfiled input.
 const filteredRobots = robots.filter((robot) => {
   // Return true if robot.name includes the searchfield value (what the user typed in the search box)
   return robot.name.toLowerCase().includes(searchField.toLowerCase());
 });

 // Show loading text if there are no robots yet. Otherwise, render.
 if (isPending) {
   return <h1 className='tc'>Loading...</h1>;
 } else {
   return (
     <div className='tc'>
       <Header />
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

// Connect is a higher order component function that returns another component that wraps App and injects the mapped state and actions as props.
// The double parentheses are needed to immediately invoke the returned component passing the App component. The returned component wrapping App is what gets exported.
// It takes 2 arguments. First one is the redux state mapped to the component props and the second one is the dispatch action that can be used to update the state.
export default connect(mapStateToProps, mapDispatchToProps)(App);