export function doubleNumbers(arr) {
  return arr.map(number => number * 2);
}

export function stringItUp(arr){
  return arr.map(number => number.toString());
}

export function capitalizeNames(arr){
  return arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}