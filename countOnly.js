const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`)
    return
  } else {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    return
  }
}


const countOnly = (allItems, itemsToCount) => {
  const results = {}

  allItems.forEach((item) => {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1
      } else {
        results[item] = 1
      }

    }
  })
  return results
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

console.log(result1)

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);