export default {
    state() {
        return {
            time: null,
            counter: 0
        }
    },

    mutations: {
        timeIncrement(state) {
            state.time = setInterval(() => {
                state.counter++;
            },1000)
        },

        clearTime(state) {
            clearInterval(state.time);
        },

        resetCounter(state) {
            state.counter = 0;
        }
    },

    actions: {
        getTimeIncrement(context) {
            context.commit('timeIncrement');
        },

        getClearTime(context) {
            context.commit('clearTime');
        },
    },

    getters: {
        counter(state) {
            return state.counter;
        }
    }
}