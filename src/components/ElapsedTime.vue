<template>
    <p>{{ $t('elapsedTime') }}: {{ converteElapsedTime }}</p>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
    setup(){
        
        const store = useStore();

        const elapsedTime = computed(() => {
            return store.getters.counter;
        })

        const converteElapsedTime = computed(() => {
            if(elapsedTime.value < 60) {
                return `${elapsedTime.value} secondi`;
            }
            else if (elapsedTime.value >= 60 && elapsedTime.value < 3600) {
                const minuts = elapsedTime.value / 60;
                const decimalPart = minuts - Math.floor(minuts);
                const seconds = decimalPart * 60;
                if(minuts - decimalPart == 1){
                    return `${minuts - decimalPart} minuto e ${Math.round(seconds)} secondi`;
                }
                else {
                    return `${minuts - decimalPart} minuti e ${Math.round(seconds)} secondi`;
                }
            }
            else if(elapsedTime.value >= 3600){
                const oneHour = 3600;
                const hours = Math.floor(elapsedTime.value / oneHour);
                const converteHoursInSeconds = hours * oneHour;
                const secondsRemaining = (elapsedTime.value - converteHoursInSeconds);
                const minuts = Math.floor(secondsRemaining / 60);
                const converteMinutsInHours = minuts * 60;
                const seconds = (elapsedTime.value - converteHoursInSeconds) - converteMinutsInHours;
                if(hours == 1){
                    return `${hours} ora, ${minuts} minuti e ${seconds} secondi`;
                }
                else {
                    return `${hours} ore, ${minuts} minuti e ${seconds} secondi`;
                }
            }
        })

        return {
            converteElapsedTime
        }
    }
}
</script>