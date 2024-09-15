import { createStore } from "vuex";
import randomWordModule from "./modules/RandomWord.js";
import errorsModule from "./modules/errors.js";
import gameOverModule from "./modules/gameOver.js";
import gameWinModule from "./modules/gameWin.js";
import timeModule from "./modules/time.js";

const store = createStore({
    modules: {
        randomWord: randomWordModule,
        errors: errorsModule,
        gameOver: gameOverModule,
        gameWin: gameWinModule,
        time: timeModule
    },
    state(){
        return {
            lang: ""
        }
    },

    mutations: {
        setLang(state,lang){
            state.lang = lang;
        }
    },

    actions: {
        getLang(context,payload){
            context.commit('setLang',payload);
            localStorage.setItem('lang',payload);
        },

        resetGame(context) {
            context.commit('setWord', null);
            context.commit('setErrors', 0);
            context.commit('setGameOver', false);
            context.commit('setWinGame',false);
            context.commit('resetCounter');
            context.commit('clearTime');
        }
    },

    getters: {
        lang(state){
            return state.lang;
        }
    }


})

export default store;