app.component('DeleteGoalModal', {
    props: {
        title: {
            type: String,
            default: 'Delete Item',
        },
    },
    methods: {
        deleteGoal() {
            this.$emit('delete-goal');
        },
    },
    template: `<app-modal id="deleteGoalModal" :title="title">
                    <template #body>
                        <p>Are you sure you would like to delete this item?</p>
                    </template>
                    <template #footer>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="deleteGoal">Delete</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    </template>
               </app-modal>`
});