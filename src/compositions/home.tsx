import React from 'react';

import Wallet from '../components/wallet';
import Button from '../components/button';
import External from '../components/icons/external';
import image from '../assets/someImage.png'; // Please replace 'someImage.png' with your actual image file
import Navigation from '../components/navigation';

const Home = () => {
  return (
    <>
        <Navigation>
        <Button variant='TERTIARY' size='M'>Home</Button>
        <Button variant='TERTIARY' size='M'>Portals</Button>
        <Button variant='TERTIARY' size='M' after={<External />}>Marketplace</Button>
        <Button variant='TERTIARY' size='M' after={<External />}>Merch</Button>
        <Button variant='TERTIARY' size='M' after={<External />}>EngageR</Button>
      </Navigation>
    </>
  );
};


export default Home;