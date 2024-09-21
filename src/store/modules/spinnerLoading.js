export default {
    state(){
        return {
            loading: true
        }
    },

    mutations: {
        setLoading(state,value){
            state.loading = value;
        }
    },

    actions: {

    },

    getters: {
        loading(state){
            return state.loading;
        }
    }
}