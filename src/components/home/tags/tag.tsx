'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TagsRes } from '@/lib/definitions';
import { useDebouncedCallback } from 'use-debounce';
import useEventListener from '@/hooks/useEventListener';
import { scrollToElement } from '@/utils';

// 客户端组件，用于标签样式的交互
function Tags({ tags }: { tags: TagsRes[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const currentHash = window.location.hash;
    if (currentHash) {
      scrollToElement(currentHash.substring(1));
      setActiveTag(currentHash.substring(1));
    }
  }, []);

  const handleHashChange = useCallback(() => {
    const currentHash = window.location.hash;
    if (currentHash) {
      setActiveTag(currentHash.substring(1));
    }
  }, []);

  // 使用自定义的 useEventListener Hook 来绑定 hashchange 事件
  useEventListener('hashchange', handleHashChange);

  // 初始化时检查 hash
  useEffect(() => {
    handleHashChange();
  }, [handleHashChange]);

  const handleClick = useDebouncedCallback((tag: TagsRes) => {
    setActiveTag(tag.link);
    // 无刷新更新 URL 中的 hash

    window.history.pushState(null, '', `#${tag.link}`);
    scrollToElement(tag.link);
  }, 300);

  const handleMouseEnter = (tag: TagsRes) => {
    setHovered(tag.link);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  useEffect(() => {
    // 使用 Intersection Observer API 监听锚点元素是否出现在视口中。
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTag(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });

    tags.forEach((tag) => {
      const element = document.getElementById(tag.link);
      if (element) {
        observer.current?.observe(element);
      }
    });

    return () => {
      observer.current?.disconnect();
    };
  }, [tags]);

  return (
    <>
      {tags.map((tag: TagsRes) => {
        const isActive = activeTag === tag.link;
        const isHovered = hovered === tag.link;

        return (
          <div
            key={tag.id}
            className={`w-fit font-semibold rounded border border-solid text-center px-2 text-sm cursor-pointer transition duration-500 ease-in-out`}
            style={{
              color: isActive || isHovered ? 'white' : tag.color,
              backgroundColor: isActive
                ? tag.color
                : isHovered
                  ? tag.color
                  : 'white',
              borderColor: tag.color
            }}
            onMouseEnter={() => handleMouseEnter(tag)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(tag)}
          >
            {tag.name}
          </div>
        );
      })}
    </>
  );
}

const TagsComponent = ({ tags }: { tags: TagsRes[] }) => {
  if (!tags || tags.length === 0) {
    return <div>No tags found</div>;
  }

  return (
    <div className="flex flex-wrap gap-4 px-3 py-2  w-full justify-center items-center shadow-md bg-gray-200 dark:bg-dark-color dark:shadow-white dark:shadow-sm">
      <Tags tags={tags} />
    </div>
  );
};

export default TagsComponent;
