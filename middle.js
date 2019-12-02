const middle = (arr) => {
  let midIndex = Math.floor((arr.length - 1) / 2)
  if (arr.length <= 2 && arr.length >= 0) {
    return []
  } else if (arr.length % 2 === 0) {
    return [arr[midIndex], arr[midIndex + 1]]
  } else if (arr.length % 2 !== 0) {
    return [arr[midIndex]]
  }
}

module.exports = middle;
