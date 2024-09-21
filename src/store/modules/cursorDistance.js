export default {
    state(){
        return {
            axisX: 0,
            axisY: 0,
            cursorDistance: 0
        }
    },

    mutations: {
        setAsseX(state,event){
            state.axisX += event;
            if(event < 0) {
                state.axisX += ((event * 2) * -1);
            }
        },

        setAsseY(state,event){
            state.axisY += event;
            if(event < 0){
                state.axisY += ((event * 2) * -1);
            }
        },

        setCursorDistance(state){
            const num = (state.axisX * state.axisX) + (state.axisY * state.axisY);
            state.cursorDistance = num ** 0.5;
        },

        resetCursorDistance(state){
            state.axisX = 0;
            state.axisY = 0;
            state.cursorDistance = 0;
        }
    },

    actions: {
        getAxisX(context,payload){
            context.commit('setAsseX',payload);
        },

        getAxisY(context,payload){
            context.commit('setAsseY',payload);
        },

        getCursorDistance(context){
            context.commit('setCursorDistance');
        }
    },

    getters: {
        axisX(state){
            return state.axisX;
        },
        axisY(state){
            return state.axisY;
        },
        cursorDistance(state){
            return state.cursorDistance;
        }
    }
}