export const sortNameAscending = (arr) => {
  const regex = /^(\d+)/;
  const filenameWithNumbersStarting = arr.filter((file) =>
    file.fileName.match(regex)
  );
  const filenameWithoutNumbers = arr.filter(
    (file) => !file.fileName.match(regex)
  );

  filenameWithNumbersStarting.sort((a, b) => {
    const f1 = a.fileName.match(regex)
      ? parseInt(a.fileName.match(regex), 10)
      : 0;
    const f2 = b.fileName.match(regex)
      ? parseInt(b.fileName.match(regex), 10)
      : 0;
    if (f1 < f2) return -1;
    if (f1 > f2) return 1;
    if (a.fileName.length > b.fileName.length) return 1;
    return a.fileName.localeCompare(b.fileName);
  });

  filenameWithoutNumbers.sort((a, b) => {
    const regex = /(\d+)(?=\D*$)/;
    const f1 = a.fileName.match(regex)
      ? parseInt(a.fileName.match(regex), 10)
      : 0;
    const f2 = b.fileName.match(regex)
      ? parseInt(b.fileName.match(regex), 10)
      : 0;
    // Extract the first letter or characters before the number
    let prefixA = a.fileName.replace(regex, "").toLowerCase();
    let prefixB = b.fileName.replace(regex, "").toLowerCase();

    if (prefixA < prefixB) return -1;
    if (prefixA > prefixB) return 1;
    if (f1 == f2) return a.fileName.localeCompare(b.fileName);
    if (a.fileName.length > b.fileName.length) return 1;
    return f1 - f2;
  });
  return [...filenameWithNumbersStarting, ...filenameWithoutNumbers];
};

export const sortNameDescending = (arr) => {
  const regex = /^(\d+)/;
  const filenameWithNumbersStarting = arr.filter((file) =>
    file.fileName.match(regex)
  );
  const filenameWithoutNumbers = arr.filter(
    (file) => !file.fileName.match(regex)
  );

  filenameWithNumbersStarting.sort((a, b) => {
    const f1 = a.fileName.match(regex)
      ? parseInt(a.fileName.match(regex), 10)
      : 0;
    const f2 = b.fileName.match(regex)
      ? parseInt(b.fileName.match(regex), 10)
      : 0;
    if (f1 < f2) return 1;
    if (f1 > f2) return -1;
    if (a.fileName.length > b.fileName.length) return -1;
    return b.fileName.localeCompare(a.fileName);
  });

  filenameWithoutNumbers.sort((a, b) => {
    const regex = /(\d+)(?=\D*$)/;
    const f1 = a.fileName.match(regex)
      ? parseInt(a.fileName.match(regex), 10)
      : 0;
    const f2 = b.fileName.match(regex)
      ? parseInt(b.fileName.match(regex), 10)
      : 0;
    // Extract the first letter or characters before the number
    let prefixA = a.fileName.replace(regex, "").toLowerCase();
    let prefixB = b.fileName.replace(regex, "").toLowerCase();

    if (prefixA < prefixB) return 1;
    if (prefixA > prefixB) return -1;
    if (f1 == f2) return b.fileName.localeCompare(a.fileName);
    if (a.fileName.length > b.fileName.length) return -1;
    return f2 - f1;
  });
  return [...filenameWithoutNumbers, ...filenameWithNumbersStarting];
};

export const sortTimeAscending = (arr) => {
  arr.sort((a, b) => {
    const f1 = new Date(a.created);
    const f2 = new Date(b.created);
    return f1 - f2;
  });
};
