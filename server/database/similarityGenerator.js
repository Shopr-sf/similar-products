const generateSimilarities = (num) => {
  for (var i = 0; i < num; i ++) {
    console.log(`${Math.floor(Math.random() * num)}, ${Math.floor(Math.random() * num)}`);
  }
}

generateSimilarities(Math.pow(10,7));