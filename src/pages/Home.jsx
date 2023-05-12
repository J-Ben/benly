import React from 'react';
import HomeHeader from './templates/Headers/HomeHeader';
import Footer from './templates/Footer';
import Welcome from '../components/molecules/Welcome';

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Welcome/>
      {/* Your component code goes here */}
      <Footer />
    </div>
  );
};

export default Home;
