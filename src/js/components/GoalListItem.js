app.component('GoalListItem', {
    props: {
        goal: {
            type: Goal,
            required: true
        },
    },
    methods: {
        percentComplete() {
            return this.goal.streak / this.goal.maxDays * 100;
        },
        selectGoal() {
            this.$emit('select-goal', this.goal);
        },
    },
    template: `<div class="border border-dark-subtle p-2 my-2">
                        <div class="d-flex justify-content-between">
                            <h4>{{goal.name}}</h4>
                            <div class="d-inline-flex">
                                <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editGoalModal" @click="selectGoal">Edit</button>
                                <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteGoalModal" @click="selectGoal">
                                    Delete
                                </button>
                            </div>
                        </div>
                        <p>Days completed: {{goal.streak}}/{{goal.maxDays}}</p>
                        <div class="progress" role="progressbar">
                            <span :class="['progress-bar', percentComplete() >= 100 ? 'bg-success' : 'bg-secondary']" :style="'width: '+ percentComplete() + '%'"></span>
                        </div>
                    </div>`
});