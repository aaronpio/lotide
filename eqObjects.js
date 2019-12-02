const { eqArrays } = require("./index");

const eqObjects = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);

  if (obj1Keys.length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key of obj1Keys) {
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] instanceof Object) {
      eqObjects(obj1[key], obj2[key]);
    } else {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;
