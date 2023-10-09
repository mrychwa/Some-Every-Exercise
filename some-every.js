// 1

function hasOddNumber(arr) {
    return arr.some(function(value){
        return value % 2 !== 0;
    })
}

// 2

function hasAZero(num) {
    return num.toString().split('').some(function(value){
        return value === '0';
      })
}

// 3

function hasOnlyOddNumbers(arr) {
    return arr.every(function(value){
        return value % 2 !== 0;
      })
}

// 4 --- this one is a little confusing to me

function hasNoDuplicates(arr) {
    return arr.every(function(value){
        return arr.indexOf(value) === arr.lastIndexOf(value);
      });
}

// 5

function hasCertainKey(arr, key) {
    return arr.every(function(value){
        return key in value
      })
}

// 6

function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(value){
        return value[key] === searchValue;
      })
}
