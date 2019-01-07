import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='input-reset ba b--black-20 pa2 mb2 db w-100 m0 br2'
        type='search'
        placeholder='procurar produtores'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;