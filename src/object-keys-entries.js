export function getHouses(arr) {
  return arr.map(x => x.house);
}

export function updateNumbers(obj) {
  return Object.keys(obj).map((key) => (key + ': ' + obj[key]));
}