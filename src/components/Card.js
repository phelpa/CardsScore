import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Card = ({ name, email, id }) => {
  return (
   
    <div className='bg-near-white  tc dim  br3 pa3 ma2 dib bw2 shadow-5 w-15 h5'>
      <CircularProgress variant="static" className="mb3" value={55}/>
      <div>
        <h1 className='f6 f4-ns mv0'>id : {id}</h1>
        <h1 className='f6 f4-ns mv0'>{name}</h1>
        <h2 className='f7 lh-copy measure mt0 mid-gray'>{email}</h2>
        <h2 className='blue f4 lh-copy measure mt0 mid-gray'>score : 562</h2>
      </div>
    </div>
  );
}

export default Card;

//