import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

//走马灯组件
const carouselComponent: React.FC<{
  images: {
    url: string;
    alt: string;
  }[];
}> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <div className="h-[600px] overflow-hidden w-full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.url}
              alt={image.alt}
              width={1200}
              height={600}
              layout="responsive"
              className="max-h-[600px] object-cover w-full overflow-hidden"
              // layout="fill"
              // objectFit="none"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default carouselComponent;
