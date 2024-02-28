const app = Vue.createApp({
    data() {
        return {
            goalList: [
                new Goal('Practice art', 7, 4),
                new Goal('Practice writing', 7, 6),
                new Goal('Take a walk', 30, 2),
                new Goal('Clean something', 4, 4)
            ],
            newGoal: new Goal('', 0, 0),
            selectedGoal: {},
            dayList: [
                new Day(new Date(), new Map([
                    [new Goal('Practice art', 7, 4), true],
                    [new Goal('Practice writing', 7, 6), false]
                ])),
                new Day(new Date(), new Map([
                    [new Goal('Practice art', 7, 4), true],
                    [new Goal('Practice writing', 7, 6), true]
                ]))
            ],
            selectedDay: {}
        }
    },
    methods: {
        addGoal() {
            this.goalList.push(this.newGoal);
            this.newGoal = new Goal('', 0, 0);
        },
        deleteSelectedGoal() {
            this.goalList.splice(this.goalList.indexOf(this.selectedGoal), 1);
        },
        selectGoal(goal) {
            this.selectedGoal = goal;
        }
    },
    computed: {

    }
});