function findLastIndex(arr, target) {
    let record = -1;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == target) {
            record = i;
        } 
    }
    return record;
} 

console.log(findLastIndex([1, 2, 3, 4, 5, 2], 2));
//In case you want to check it later