const app = Vue.createApp({
    data() {
        return {
            goalList: [
                new Goal('Practice art', 4, 7),
                new Goal('Practice writing', 6, 7),
                new Goal('Take a walk', 2, 30),
                new Goal('Clean something', 4, 4)
            ],
            newGoal: new Goal('', 0, 0)
        }
    },
    methods: {
        addGoal() {
            this.goalList.push(this.newGoal);
            this.newGoal = new Goal('', 0, 0);
        },
        deleteGoal(goal) {
            this.goalList.splice(this.goalList.indexOf(goal), 1);
        }
    },
    computed: {

    }
});