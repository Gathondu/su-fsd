export const sortNameAscending = (arr) => {
  arr.sort((a, b) => {
    const regex = /^(\d+)/;
    const f1 = a.fileName.match(regex)
      ? parseInt(a.fileName.match(regex), 10)
      : 0;
    const f2 = b.fileName.match(regex)
      ? parseInt(b.fileName.match(regex), 10)
      : 0;
    if (f1 < f2) return -1;
    if (f1 > f2) return 1;
    return a.fileName.localeCompare(b.fileName);
  });
  return arr;
};
export const sortNameDescending = (arr) => {
  arr.sort((a, b) => {
    const regex = /^(\d+)/;
    const f1 = a.fileName.match(regex)
      ? parseInt(a.fileName.match(regex), 10)
      : 0;
    const f2 = b.fileName.match(regex)
      ? parseInt(b.fileName.match(regex), 10)
      : 0;
    if (f1 < f2) return 1;
    if (f1 > f2) return -1;
    return b.fileName.localeCompare(a.fileName);
  });
  return arr;
};
export const sortTimeAscending = (arr) => {
  arr.sort((a, b) => {
    const f1 = new Date(a.created);
    const f2 = new Date(b.created);
    return f1 - f2;
  });
  return arr;
};
