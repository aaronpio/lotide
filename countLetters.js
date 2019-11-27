const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`)
    return
  } else {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    return
  }
}

const countLetters = (str) => {
  const string = str.replace(/ /g, '').toLowerCase()
  const results = {}

  console.log(string)

  for (let letter of string) {
    if (results[letter]) {
      results[letter] += 1
    } else {
      results[letter] = 1
    }
  }
  return results
}

console.log(countLetters("Aaron Lang"))
