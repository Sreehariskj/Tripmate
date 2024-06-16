export const getItemLayout = (itemSize: number, index: number) => ({
  length: itemSize,
  offset: itemSize * index,
  index,
});
