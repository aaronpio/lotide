const flatten = arr => {
  let newArr = [];

  for (let el of arr) {
    if (Array.isArray(el)) {
      for (let innerEl of el) {
        newArr.push(innerEl);
      }
    } else {
      newArr.push(el);
    }
  }
  return newArr;
};

module.exports = flatten;
