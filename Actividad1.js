let string = "background";
function IsIsogram(str, i = 0, e = 1) {
    if (string.length === i - 1) {
        return true;
    }
    if (str.length === e - 1) {
        return IsIsogram(str, i + 1, i + 2);
    } else {
        if (str[i] === str[e]) {
            return false;
        } else {
            return IsIsogram(str, i, e + 1);
        }
    }
}
console.log(IsIsogram(string));
