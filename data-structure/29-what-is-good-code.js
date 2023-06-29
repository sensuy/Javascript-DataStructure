const memo = ["nemo"];

function findMemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
    }
  }
}

findMemo(memo);
