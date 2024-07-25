'use client';
import Link from 'next/link';
import NavLinks from './nav-links';
import Image from 'next/image';
import DarkModeSwtichComponent from './darkModeComponent';
import { useDarkModeToggle } from '@/context/DarkModeContext';
const Logo = '/logo.png';
const LogoDark = '/logo_dark.png';
export default function TopNav() {
  const { isDark, followSystem, matchMedia } = useDarkModeToggle();

  console.log(
    'isDark',
    isDark,
    'followSystem',
    followSystem,
    'matchMedia',
    matchMedia
  );

  return (
    <div className="bg-white dark:bg-dark-color flex flex-row px-3 w-full justify-center items-center h-16 shadow dark:shadow-white dark:shadow-sm opacity-[0.95]">
      <Link
        className="flex h-14 items-center justify-center rounded-md p-4"
        href="/"
      >
        <Image
          src={
            followSystem
              ? matchMedia?.matches ?? false
                ? LogoDark
                : Logo
              : isDark
                ? LogoDark
                : Logo
          }
          width={48}
          height={48}
          alt="Icon"
          className="translate-y-1"
        />

        <div className="w-32 text-gray-700 font-semibold dark:text-white">
          多吃米饭
        </div>
      </Link>
      <div className="flex grow flex-row justify-start space-x-6 h-full items-center">
        {/* <NavLinks /> */}
      </div>
      <DarkModeSwtichComponent />
    </div>
  );
}
