import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ display:'flex', flexWrap: 'wrap',  overflow: 'scroll', border: '2px solid black', height: '600px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;