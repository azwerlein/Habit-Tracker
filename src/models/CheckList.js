export default function CheckList() {
    let arr = [];
    arr.add = function(item) {
        this.push({
            item: item,
            checked: false,
        });
        return this;
    };
    return arr;
}