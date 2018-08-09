const faker = require('faker');
const names = require('./names')(Math.pow(10, 7));


const generateData = (start, num) => {
  for (let index = start; index < num; index ++) {
    console.log(`${index}, ${names[index]},${'https://loremflickr.com/320/240/shirts'}, ${faker.commerce.productName()}, ${Math.random() * 5}, ${Math.floor(Math.random() * 10000)}, ${faker.commerce.price()}, ${Math.random() >= 0.5}`);
  }
};

generateData(Math.pow(10, 6) * 5, Math.pow(10, 7));
