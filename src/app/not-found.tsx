import Link from 'next/link';
import Image from 'next/image';
import notFoundIcon from '/public/404.svg';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center  h-screen">
      <div className="flex items-center w-1/2">
        <div className="w-3/4">
          <Image src={notFoundIcon} alt="404" className="w-full h-full" />
        </div>
        <div className="w-1/4">
          <h2 className="text-2xl font-bold">404 Not Found</h2>
          <p>Could not find the requested resource.</p>
          <Link href="/" className="text-blue-500">
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
