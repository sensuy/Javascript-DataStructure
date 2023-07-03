function booooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('booooo!');
  }
};

booooo([1,2,3,4,5]); // O(1)

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
};

arrayOfHiNTimes(6); // O(n)
console.log(arrayOfHiNTimes(6));
