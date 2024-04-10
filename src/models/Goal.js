export default function Goal(name, maxDays, streak) {
    this.name = name;
    this.maxDays = maxDays;
    this.streak = streak ?? 0;
}

export function GoalList() {
    let arr = [];
    arr.add = function () {

    };
    return arr;
}
