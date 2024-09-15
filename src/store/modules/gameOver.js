export default {
    state(){
        return {
            gameOver: false
        }
    },

    mutations: {
        setGameOver(state,value){
            state.gameOver = value;
        }
    },

    actions: {
        getGameOver(context,payload){
            context.commit('setGameOver',payload);
        }
    },

    getters: {
        gameOver(state){
            return state.gameOver;
        }
    }
}