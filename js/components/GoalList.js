app.component('GoalList', {
    props: {
        goals: {
            type: Array,
            required: true
        },
    },
    // emits: ['select-goal'],
    methods: {
        selectGoal(goal) {
            this.$emit('select-goal', goal);
        },
    },
    template: `
        <goal-list-item v-for="goal in goals"
                        :goal="goal"
                        :key="goal.name"
                        @select-goal="selectGoal"
                    ></goal-list-item>
    `
});