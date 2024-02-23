export const favouriteMatcher = (arr1, arr2) => {
  const result = arr1.map(obj1 => {
    const matchingObj2 = arr2.find(obj2 => obj2.id === obj1.id);

    if (matchingObj2) {
      return { ...obj1, favourite: matchingObj2.favourite };
    } else {
      return obj1;
    }
  });

  return result;
};

export const calcPriceDiap = (from, to) => {
  const diap = [];
  for (let i = from; i <= to; i += 10) {
    diap.push({ value: i, label: i });
  }
  return diap;
};
