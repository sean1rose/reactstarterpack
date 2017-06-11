import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Battle and stuff right here!</h1>
        <Link className='button' to='/battle'>
          BATTLE!
        </Link>
      </div>
    )
  }
}

export default Home;
