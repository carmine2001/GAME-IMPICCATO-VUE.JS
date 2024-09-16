export default {
    state(){
        return {
            sequence: 0,
            arraySequences: [],
            longestSequence: 0
        }
    },

    mutations: {
        incrementSequence(state){
            state.sequence++;
        },

        saveSequences(state){
            if(!state.arraySequences.includes(state.sequence)){
                state.arraySequences.push(state.sequence);
            }
        },

        resetSequence(state){
            state.sequence = 0;
        },

        resetArraySequences(state){
            state.arraySequences = [];
        },

        longestSequence(state){
            state.longestSequence = 0;
        },

        setLongestSequence(state){
            for(let i = 0; i < state.arraySequences.length; i++){
                const num = state.arraySequences[i];
                if(num > state.longestSequence){
                    state.longestSequence = num;
                }
            }
        }
    },

    actions: {

        getIncrementSequence(context){
            context.commit('incrementSequence');
        },

        getSaveSequences(context){
            context.commit('saveSequences');
        },

        getResetSequence(context){
            context.commit('resetSequence');
        },

        getLongestSequences(context){
            context.commit('setLongestSequence');
        }
    },

    getters: {
        arraySequences(state){
            return state.arraySequences;
        },

        sequence(state){
            return state.sequence;
        },

        longestSequence(state){
            return state.longestSequence;
        }
    }
}