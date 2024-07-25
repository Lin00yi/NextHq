'use client';
import useEventListener from '@/hooks/useEventListener';
import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const ToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  // 监听滚动事件
  useEventListener('scroll', handleScroll);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`${
        showButton ? 'scale-100 rotate-0' : 'scale-0 -rotate-45'
      } transition-scale duration-200 rounded-full text-white bg-main-color  w-12 h-12 fixed bottom-6 right-4 z-10 hover:cursor-pointer flex justify-center items-center`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </div>
  );
};

export default ToTopButton;
