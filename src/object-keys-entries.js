export function getHouses(arr) {
  return arr.map(x => x.house);
}

export function updateNumbers(obj) {
  return Object.keys(obj).map((key) => (key + ': ' + obj[key]));
}

export function houseSize(arr) {
  let newArr = [];
  for (let item of arr) {
    newArr.push(item.name);
    if (item.spouse !== null) {
      newArr.push(item.spouse);
    } if (item.children != null) {
      for (let child of item.children) {
        newArr.push(child);
      }
    }
  }
  return newArr.length;
}