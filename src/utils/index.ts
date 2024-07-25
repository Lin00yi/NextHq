/**
 * 将 hex 转换为 RGB
 * @author huaqiang
 * @param {string} hex    颜色值
 * @param {string} opacity   透明度
 * @returns   返回转换后的 RGB 颜色值
 */
export const hexToRgb = (hex: string, opacity: string) => {
  // 去掉可能存在的 "#" 号
  hex = hex.replace('#', '');

  // 按照两个字符一组分割，并转换为十进制数值
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`; // 返回带透明度的 rgba 值
};

/**
 * 平滑滚动到指定元素
 * @param elementId 元素的ID
 * @param navHeight 导航栏的高度，默认值为102
 */
export const scrollToElement = (elementId: string, navHeight: number = 102) => {
  const element = document.getElementById(elementId);
  if (element) {
    // 计算滚动的位置，考虑导航栏高度
    const offset =
      element.getBoundingClientRect().top + window.scrollY - navHeight;

    // 平滑滚动至锚点
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  }
};
