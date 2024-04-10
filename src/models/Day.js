import CheckList from "./CheckList.js";

export default function Day(date, goals) {
    this.date = date;
    this.goals = goals;
}

export function makeDay(date, goals) {
    console.log(goals);
    let entries = new CheckList();
    for (let i = 0; i < goals.length; i++) {
        entries.add(goals[i])
    }
    return new Day(date, entries);
}
