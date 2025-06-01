import React from 'react';
import Hero from '../components/Home/Hero';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import StorySection from '../components/Home/StorySection';
import CategoryShowcase from '../components/Home/CategoryShowcase';
import Newsletter from '../components/Home/Newsletter';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <StorySection />
      <CategoryShowcase />
      <Newsletter />
    </>
  );
};

export default HomePage;