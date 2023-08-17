import React from 'react';

// Props have access to children components which this component wraps.
const Scroll = (props) => {
  return (
    // Remember classes in JSX sometimes are named differently.
    // For example, overflow-y would be overflowY.
    <div style={{overflowY: 'scroll', height: '740px', border: '1px solid black'}}>
      {props.children}
    </div>
  )
}

export default Scroll;