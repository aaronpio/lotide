const without = (source, itemsToRemove) => {
  return source.filter(e => !itemsToRemove.includes(e));
};

module.exports = without;
