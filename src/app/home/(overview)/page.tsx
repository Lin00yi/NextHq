import { TagsRes } from '@/lib/definitions';
// import ItemCardWarpper from '@/components/home/Items';
import { fetchListTags } from '@/lib/data';
// import CardCarousel from '@/components/home/cardCarousel';
import dynamic from 'next/dynamic';
const ItemCardWarpper = dynamic(() => import('@/components/home/Items'), {
  ssr: false
});
const CardCarousel = dynamic(() => import('@/components/home/cardCarousel'), {
  ssr: false
});
//如果使用的是 Next.js 13 及以上版本，并且已经采用了 app 目录进行路由和页面管理，那么 getStaticProps 和 getServerSideProps 将不能使用
export default async function Items() {
  const data = await fetchListTags();
  if (!data || data.length === 0) {
    return null;
  }
  //排序
  data.sort((a: TagsRes, b: TagsRes) => {
    return a.name.localeCompare(b.name);
  });
  return (
    <>
      <div>
        {data.map((tag: TagsRes) => {
          return (
            <div
              key={tag.id}
              className="flex flex-wrap gap-4 px-3 py-10  w-full justify-center items-center"
              //增加锚点
              id={tag.link}
            >
              <div className="w-full text-center font-bold flex justify-center items-center max-sm:text-lg sm-max:xl:text-xl text-2xl my-8 max-sm:my-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 727 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mr-2"
                >
                  <path
                    d="M655.614 184.917l-434.429 752.453c-27.365 47.397-87.971 63.637-135.369 36.272s-63.637-87.971-36.272-135.369l434.429-752.453c27.365-47.397 87.971-63.637 135.369-36.272s63.637 87.971 36.272 135.369z"
                    fill="rgb(68, 185, 249)"
                  ></path>
                </svg>{' '}
                <span className="text-black dark:text-white">{tag.name}</span>{' '}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 727 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mr-2"
                >
                  <path
                    d="M655.614 184.917l-434.429 752.453c-27.365 47.397-87.971 63.637-135.369 36.272s-63.637-87.971-36.272-135.369l434.429-752.453c27.365-47.397 87.971-63.637 135.369-36.272s63.637 87.971 36.272 135.369z"
                    fill="rgb(68, 185, 249)"
                  ></path>
                </svg>
              </div>
              <ItemCardWarpper id={tag.id} />
            </div>
          );
        })}
      </div>
      <CardCarousel data={data} />
    </>
  );
}
