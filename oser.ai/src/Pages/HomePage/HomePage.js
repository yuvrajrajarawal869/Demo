import React from 'react';
import HeroSection from './section/HeroSection/HeroSection';
import WhiteLabelConsumerApp from './section/WhiteLabelConsumerApp/WhiteLabelConsumerApp';
import Testimonials from './section/Testimonials/Testimonials';
import WhyChooseUs from './section/WhyChooseUs/WhyChooseUs';
import Vision from './section/Vision/Vision';
// import RenewableEnergy from './section/RenewableEnergy/RenewableEnergy';
// import CarbonCalculator from './section/CarbonCalculator/CarbonCalculator';
// import AwarenessCampaigns from './section/AwarenessCampaigns/AwarenessCampaigns';
// import Partnering from './section/Partnering/Partnering';
// import EnergyTips from './section/EnergyTips/EnergyTips';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <WhiteLabelConsumerApp/>
      <Testimonials />
      <WhyChooseUs />
      <Vision />
      {/*  <RenewableEnergy />
      <CarbonCalculator />
      <AwarenessCampaigns />
      <Partnering />
      <EnergyTips /> */}
    </div>
  );
};

export default HomePage;
