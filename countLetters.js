const countLetters = str => {
  const string = str.replace(/ /g, "").toLowerCase();
  const results = {};

  for (let letter of string) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;
