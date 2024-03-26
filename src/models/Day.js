export default function Day(date, goals) {
    this.date = date;
    this.goals = goals;
}

export function makeDay(date, goals) {
    console.log(goals);
    let entries = goals.map(goal => [goal, false]);
    return new Day(date, new Map(entries));
}