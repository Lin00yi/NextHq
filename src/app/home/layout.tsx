// import ToTopButton from '@/components/ToTop';
import Banner from '@/components/home/banner/index';
import dynamic from 'next/dynamic';
// import Tags from '@/components/home/tags';
const ToTopButton = dynamic(() => import('@/components/ToTop'), {
  ssr: false
});
const Tags = dynamic(() => import('@/components/home/tags'), {
  ssr: false
});
export default async function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mt-16">
      <div className="w-full flex-none">
        <Banner />
      </div>
      <div className="w-full flex-none sticky top-16 left-0 z-10 ">
        <Tags />
      </div>
      <div className="w-full flex-none px-20">{children}</div>

      <ToTopButton />
    </main>
  );
}
