app.component('GoalList', {
    props: {
        goals: {
            type: Array,
            required: true
        }
    },
    methods: {
        selectGoal(goal) {
            this.$emit('selectGoal', goal);
        }
    },
    template: `
        <goal-list-item v-for="goal in goals"
                        :goal="goal"
                        :key="goal.name"
                        @select-goal="selectGoal"
                    ></goal-list-item>
    `
});