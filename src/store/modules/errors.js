export default {
    state(){
        return {
            errors: 0
        }
    },

    mutations: {
        incrementErrors(state){
            state.errors++;
        },

        setErrors(state){
            state.errors = 0;
        }
    },

    actions: {
        getErrors(context){
            context.commit('incrementErrors');
        }
    },

    getters: {
        errors(state){
            return state.errors;
        }
    }
}