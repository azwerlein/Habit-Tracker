export default function EnhancedList(arr) {
    if (arr === undefined) {
        arr = [];
    }

    arr.replace = function(item, oldItem) {
        const index = arr.indexOf(oldItem);
        arr[index] = item;
    }

    arr.delete = function(item) {
        arr.splice(arr.indexOf(item), 1);
    }

    return arr;
}