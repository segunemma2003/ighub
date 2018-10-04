var arr = [2,4,6,8,10,12,14,16]
var x = 16
function Search(arr, x) {
    let leftNumber = 0;
    let rightNumber = array.length - 1;
    while (leftNumber <= rightNumber) {
        const mid = left + Math.floor((rightNumber - leftNumber) / 2);
        if (arr[mid] === x) {
            return mid;
        }
        if (arr[mid] < x) {
            leftNumber = mid + 1;
        } else {
            rightNumber = mid - 1;
        }
    }
    return -1;
}

console.log(Search(arr, x) === 16 );