function count (string) {
    // declaring a var count it is an empty object
    var count = {};
    // creating an array of charactars, seperated by a d
    let charArr = string.split('')

    // go through each char in our array
    charArr.forEach(function(s) {
    // shorthand and cleanway to write this
    count[s] ? count[s]++ : count[s] = 1;

    // is s a key in our count object
     if( count[s] ){
        // if it is add one to the value
        count[s] += 1
     } else {
         // if it is not add and set intial to value to 1
         count[s] = 1
        }
    });
    // we go through all chars return count
    // return count;
    let x =  Object.entries(count);
    return x.map((innerArray)=>{
        return  {letter: innerArray[0], count: innerArray[1]}
    })
    // { a: 1, b: 2, c: 3 } =>  [{letter:a, count:1,},]
}

// [{letter:a, count:1,},]
let v1 = count('abbccc') //{ a: 1, b: 2, c: 3 }
console.log(v1)