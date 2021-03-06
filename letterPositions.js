const letterPositions = sentence => {
  const string = sentence.replace(/ /g, "").toLowerCase();
  const results = {};

  for (let i = 0; i < string.length; i++) {
    if (results[string[i]]) {
      results[string[i]].push(i);
    } else {
      results[string[i]] = [i];
    }
  }

  return results;
};

module.exports = letterPositions;
