import { TagsRes } from '@/lib/definitions';
import { fetchListTags } from '@/lib/data';
// import TagsComponent from '@/components/home/tags/tag';
import dynamic from 'next/dynamic';
const TagsComponent = dynamic(() => import('@/components/home/tags/tag'), {
  ssr: false
});

// 标签组件
export default async function Tags() {
  const data = await fetchListTags();
  // 如果没有数据，则返回空的 div
  if (!data || data.length === 0) {
    return <div>No tags found</div>;
  }
  //对data每项的name中文进行排序
  const _data = data.sort((a: TagsRes, b: TagsRes) => {
    return a.name.localeCompare(b.name, 'zh');
  });

  return (
    <div>
      <TagsComponent tags={_data} />
    </div>
  );
}
