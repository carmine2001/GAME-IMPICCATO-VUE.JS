export default {
    state(){
        return {
            winGame: false
        }
    },

    mutations: {
        setWinGame(state,value){
            state.winGame = value
        }
    },

    actions: {
        getWinGame(context,payload){
            context.commit('setWinGame',payload);
        }
    },

    getters: {
        winGame(state){
            return state.winGame;
        }
    }
}