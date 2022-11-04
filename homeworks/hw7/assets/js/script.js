function averageThreeNumbers(a, b, c){
    let sum = a+b+c;
    let average = sum / 3;
    return average;
}

function createSentence(num, noun){
    let str0 = "On average, a Berkeley student has";
    let str1 = " ";
    return `${str0}${str1}${num}${str1}${noun}`;
}

function getRandomNum(max){
    return Math.floor(Math.random() * max);
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(x, y, z);

let sentence = createSentence(avg, "penguins");

console.log(sentence);