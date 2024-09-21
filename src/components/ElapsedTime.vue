<template>
    <p v-if="elapsedTimeWithSec">{{ $t('elapsedTimeSeconds', {seconds: converteElapsedTime.seconds}) }}</p>
    <p v-else-if="elapsedTimeWithMinSec">{{ $t('elapsedTimeMinSec', {minutes: converteElapsedTime.minutes, seconds: converteElapsedTime.seconds}) }}</p>
    <p v-else-if="elapsedTimeWithHoursMinSec">{{ $t('elapsedTimeHoursMinSec', {hours: converteElapsedTime.hours, minutes: converteElapsedTime.minutes, seconds: converteElapsedTime.seconds}) }}</p>
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

        const elapsedTimeWithSec = computed(() => elapsedTime.value < 60);
        const elapsedTimeWithMinSec = computed(() => elapsedTime.value >= 60 && elapsedTime.value < 3600);
        const elapsedTimeWithHoursMinSec = computed(() => elapsedTime.value >= 3600);

        const converteElapsedTime = computed(() => {
            if(elapsedTimeWithSec.value) {
                return {
                    seconds: elapsedTime.value
                }
            }
            else if (elapsedTimeWithMinSec.value) {
                const minutes = elapsedTime.value / 60;
                const decimalPart = minutes - Math.floor(minutes);
                const seconds = decimalPart * 60;
                return {
                    minutes: minutes - decimalPart,
                    seconds: Math.round(seconds)
                }
            }
            else if(elapsedTimeWithHoursMinSec.value){
                const oneHour = 3600;
                const hours = Math.floor(elapsedTime.value / oneHour);
                const converteHoursInSeconds = hours * oneHour;
                const secondsRemaining = (elapsedTime.value - converteHoursInSeconds);
                const minutes = Math.floor(secondsRemaining / 60);
                const converteMinutsInHours = minutes * 60;
                const seconds = (elapsedTime.value - converteHoursInSeconds) - converteMinutsInHours;
                return {
                    hours,
                    minutes,
                    seconds
                }
            }
        })

        return {
            converteElapsedTime,
            elapsedTimeWithSec,
            elapsedTimeWithMinSec,
            elapsedTimeWithHoursMinSec
        }
    }
}
</script>