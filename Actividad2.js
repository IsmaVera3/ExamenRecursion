let array = [2, -4, 12, 53, 3, 11];
let numero = 3;
FindNumber(array, numero);
function FindNumber(arr, n, i = 0) {
    if (arr.length === i + 1) {
        console.log(false);
        return;
    }
    if (arr[i] === 3) {
        console.log(true);
        return;
    } else {
        return FindNumber(arr, n, i + 1);
    }
}
