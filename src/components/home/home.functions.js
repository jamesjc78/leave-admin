// sorting data
export const mySort = (arr, sortBy) => {
  arr.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
};
