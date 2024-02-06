const A = [1, 2, 3, 4, 5];
const B = ['a', 'b', 'c', 'd', 'e'];

function zipList(listOne, listTwo) {
  const newList = [];
  for (let i = 0; i < listOne.length; i++) {
    newList.push(listOne[i]);
    newList.push(listTwo[i]);
  }
  return newList;
}

console.log(zipList(A, B));

function zipListTheSimpleWay(one, two) {
  const mergeList = _.zip(one, two);
  const newList = _.flatten(mergeList);
  return newList;
}

console.log(zipListTheSimpleWay(A, B));
