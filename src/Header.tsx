import React, { FC } from 'react';

const Header: FC = () => {
  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <img src='/logo.png' />
        </div>
        <p>Member Benefits</p>
        <p>Partners</p>
        <p>How It Works</p>
        <p>About</p>
        <button>LOG IN</button>
      </div>
    </header>
  );
}

export default Header;