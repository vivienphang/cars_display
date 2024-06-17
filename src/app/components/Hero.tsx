'use client';
import CustomButton from './CustomButton';
import Image from 'next/image';
import CarImage from '../../../public/hero.png';

const Hero = () => {
  const handleScroll = () => {
    console.log('empty');
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car -- quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental with our effortless booking process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src={CarImage} alt="hero" fill className="object-contain" />
          </div>
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
