// rule 1: worst case
// rule 2: remove constants
// rule 3: different terms for inputs
// rule 4: drop non-dominant terms


function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); // O(1)

  var middleIndex = Math.floor(items.length / 2); // O(1)
  var index = 0; // O(1)

  while (index < middleIndex) { // O(n/2)
    console.log(items[index]); // O(n/2)
    index++; // O(n/2)
  }

  for (var i = 0; i < 100; i++) { // O(100)
    console.log('hi'); // O(100)
  }
}

// O(1 + 1 + 1 + n/2 + n/2 + n/2 + 100 + 100) => 
// O(3 + 3n/2 + 200) 
// O(203 + 3n/2)
// O(n/2) => O(n)
