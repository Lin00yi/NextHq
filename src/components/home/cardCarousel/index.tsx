'use client';
import React, { CSSProperties, useRef, useState } from 'react';
import './index.css';
import { TagsRes } from '@/lib/definitions';
import { scrollToElement } from '@/utils';
interface CSSVariables {
  '--t': string;
}

//单个card
const Card: React.FC<{ tag: TagsRes }> = ({ tag }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <span
      key={tag.id}
      onClick={() => scrollToElement(tag.link, 102)}
      className={`text-lg hover:cursor-pointer m-[10px] px-[10px]  py-[5px] tracking-wide uppercase inline-block rounded-md text-black dark:text-white text-center dark:bg-dark-color bg-gray-100 transition duration-500`}
      style={{
        color: isHovered ? tag.color : '',
        transition: 'color 0.3s ease'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {tag.name}
    </span>
  );
};

const CardCarousel: React.FC<{ data: TagsRes[] }> = ({ data }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const style: CSSProperties & CSSVariables = {
    '--t': '60s'
  };

  return (
    <div className="overflow-hidden w-full relative py-16">
      <div className="text-2xl font-semibold mb-10 text-center dark:text-white">
        Tags标签集合
      </div>
      <div className="scroll flex" ref={carouselRef} style={style}>
        <div>
          {data.map((tag, index) => (
            <Card key={index} tag={tag} />
          ))}
        </div>
        <div>
          {data.map((tag, index) => (
            <Card key={`clone-${index}`} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
