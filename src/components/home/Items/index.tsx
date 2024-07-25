// 'use server'  默认为 'use server'，表示在服务端渲染--SSR

import { fetchItemsById } from '@/lib/data';
import { ItemsRes } from '@/lib/definitions';
// import Card from './card';
import dynamic from 'next/dynamic';
const Card = dynamic(() => import('./card'), { ssr: false }); //动态导入解决 window is not defined  服务端没有浏览器window对象
export default async function CardWrapper({ id }: { id: string }) {
  const items = await fetchItemsById(id);
  console.log('----CardWrapper----', items);
  if (!items || items.length === 0) {
    return <div>No items found</div>;
  }
  return (
    <div
      className="grid w-full justify-center gap-y-10 gap-x-8 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(165px, 1fr))'
      }}
    >
      {items.map((item: ItemsRes) => {
        return <Card key={item.id} item={item} />;
      })}
    </div>
  );
}
