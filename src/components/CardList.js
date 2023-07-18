import React from 'react';
import Card from './Card.js';
import './Card.css'

// Destructure the props being passed to this component and use them.
const CardList = ({ robots }) => {
  // Map through the robots array and return a Card component for each robot.
  const cardComponent = robots.map((robot) => {
    return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
  });

  return (
    <div>
      { cardComponent }
    </div>
  );
}

export default CardList;