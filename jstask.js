function findMissingNumber(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) {
            return arr
        } else {
            return newArr.push(i)
        }
    }
}

console.log(findMissingNumber([1, 2, 4]))
