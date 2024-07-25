import { useEffect, useRef } from 'react';

//事件绑定和解绑
const useEventListener = (
  eventName: string,
  handler: EventListenerOrEventListenerObject,
  element = window
) => {
  // 创建一个ref来存储处理函数
  const savedHandler = useRef<EventListenerOrEventListenerObject>();

  useEffect(() => {
    // 如果处理函数发生变化，更新ref中的处理函数
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // 定义事件监听器来调用ref中的处理函数
    const eventListener = (event: Event) => {
      if (savedHandler.current) {
        (savedHandler.current as EventListener)(event);
      }
    };

    if (typeof element !== 'undefined') {
      // 绑定事件
      element.addEventListener(eventName, eventListener);

      // 清理时解绑事件
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    }
    return () => {};
  }, [eventName, element]);
};

export default useEventListener;
