app.component('DayList', {
    props: {
        days: {
            type: Array,
            required: true
        },
    },
    template: `
        <div class="d-flex flex-column">
              <day-list-item v-for="day in days"
              :day="day"
              ></day-list-item>
        </div>`
});