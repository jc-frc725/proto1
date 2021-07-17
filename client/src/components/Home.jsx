import React from 'react';

console.log('Arriving at Home component');

const Home = () => {
  return (
    <div className='col-mid text-center'>
      <h2>Home</h2>
      <ul className='row list-group'>
        <li className='list-group-item'>Event item 1</li>
        <li className='list-group-item'>Event item 2</li>
      </ul>
    </div>
  );
}

export default Home;