// I'll come up with a better name for this
app.component('EntryModal', {
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
    template: `<div class="modal fade" id="entryModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{title}}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="">
                        <div class="modal-body">
                            <div class="form-check form-check-reverse form-switch" v-for="goal in goals">
                                <label class="form-check-label">{{goal.name}}: </label>
                                <input class="form-check-input" type="checkbox" role="switch">
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-success" type="submit">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>`
});