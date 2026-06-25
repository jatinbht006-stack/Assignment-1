import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import TestimonialSection from '../components/TestimonialSection';
import CTABanner from '../components/CTABanner';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FeatureCard 
          title="Expert Instructors" 
          description="Learn from industry professionals with years of experience." 
        />
        <FeatureCard 
          title="Interactive Projects" 
          description="Build real-world applications to build your portfolio." 
        />
      </div>
      <TestimonialSection />
      <CTABanner />
    </div>
  );
};

export default LandingPage;