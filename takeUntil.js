const takeUntil = (array, callback) => {
  let result = [];
  for (let el of array) {
    if (!callback(el)) {
      result.push(el);
    } else {
      return result;
    }
  }
};

module.exports = takeUntil;
