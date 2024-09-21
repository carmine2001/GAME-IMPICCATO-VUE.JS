export default {
    state(){

        return {
            word: null,
        }

    },

    mutations: {
        setWord(state,word){
            state.word = word;
        }
    },

    actions: {

        async getWord(context){
            context.commit('setLoading',true);
            const lang = context.getters.lang === ''? localStorage.getItem('lang'): context.getters.lang;
            const res = await fetch(`https://random-word-api.herokuapp.com/word?lang=${lang}&length=5`);
            const data = await res.json();
            context.commit('setWord',data);
            context.commit('setLoading',false);
            console.log(data)
        }

    },

    getters: {
        word(state){
            return state.word;
        }
    }
}