app.component('GoalList', {
    props: {
        title: {
            type: String,
            default: 'Goals'
        },
        goals: {
            type: Array,
            required: true
        }
    },
    template: `
        <goal-list-item></goal-list-item>
    `
});