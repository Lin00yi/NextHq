'use client';

import CarouselComponent from './carouselComponent';
const images = [
  {
    url: '/banner2.jpg',
    alt: 'banner2'
  },
  {
    url: '/banner1.jpg',
    alt: 'banner1'
  }
];
//Banner轮播图部分

const Banner = () => {
  return <CarouselComponent images={images} />;
};

export default Banner;
