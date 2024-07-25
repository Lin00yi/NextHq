'use client';
// 这部分是在客户端渲染的--CSR
import { ItemsRes } from '@/lib/definitions';
import Image from 'next/image';
import HomeSvg from '@/assets/images/home.svg';
import GithubSvg from '@/assets/images/github.svg';
import Link from 'next/link';
const Card = ({ item }: { item: ItemsRes }) => {
  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    if (item.link) {
      window.open(item.link, '_blank');
    }
  };

  return (
    <div
      className="bg-white shadow-lg hover:cursor-pointer w-[190px] h-[240px] rounded-md flex flex-col justify-start items-center px-2 pt-4 pb-2 duration-300 hover:scale-110 transition-transform"
      onClick={handleClick}
    >
      <div className="w-16 h-16 flex justify-center items-center">
        <Image
          src={item.imgUrl ? item.imgUrl : '/logo.png'}
          width={48}
          height={48}
          alt=""
        />
      </div>
      <div className="dark:text-black text-black text-xl my-1 text-center px-2 h-16">
        {item.name}
      </div>
      <div className="text-xs text-gray-600 h-8 line-clamp-2 text-center">
        {item.description}
      </div>
      <div className="border-t border-gray-200 mb-2 mt-2 w-full h-1" />
      <div className="flex justify-between items-center w-full px-2">
        {item.link?.trim() ? (
          <Link href={item.link}>
            <Image
              src={HomeSvg}
              width={24}
              alt=""
              className="hover:scale-110 duration-200"
            />
          </Link>
        ) : (
          <div className="flex-1"></div>
        )}
        {item.githubLink?.trim() ? (
          <Link href={item.githubLink}>
            <Image
              src={GithubSvg}
              width={24}
              alt=""
              className="hover:scale-110 duration-200"
            />
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Card;
