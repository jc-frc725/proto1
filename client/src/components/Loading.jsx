import React from 'react';

const Loading = () => {
  // need to require images for Webpack to load them
  //const loading = require('../../../public/assets/loading.svg');

  return (
    <div className='loading-spin'>
      <img src={loading} alt='Loading...' />
    </div>
  )
  
}

export default Loading;