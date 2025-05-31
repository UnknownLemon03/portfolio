<script setup lang="ts">
    import { ref, watchEffect } from "vue";
    import WobblyText from "@/components/text/Wobbly.vue";
    import arrowIcon from "@/assets/svg/play.svg";
import { get } from "@/fetch";
    let idx = 0;
    let messageIndex = 0;

    let displayedMessage = ref(get()['firstIntro']);
    watchEffect(() => {
        const intro = get().firstIntro;
        if (intro) {
            displayedMessage.value = intro;
        }
    }); 
    const usedIndices = new Set<number>();
    let unusedIndices = Array.from(get()["messageList"].keys()); // Initially, all indices are unused

    const randomizeMessage = (): void => {
        // Reset if all messages have been used
        if (unusedIndices.length === 0) {
            usedIndices.clear();
            unusedIndices = Array.from(get()["messageList"].keys());
        }

        // Pick a random index from the unused list
        const randomPos = Math.floor(Math.random() * unusedIndices.length);
        const randomMessageIndex = unusedIndices[randomPos];

        // Update state
        usedIndices.add(randomMessageIndex);
        unusedIndices.splice(randomPos, 1); // Remove used index from the unused list
        displayedMessage.value = get()["messageList"][randomMessageIndex];
        idx += 1; // Trigger re-render if needed
    };


</script>

<template>
    <button v-on:click="randomizeMessage" class="profile window full-w flex g-x p-x">
        <img src="https://avatars.githubusercontent.com/u/112918205?v=4" class="profile__image full-h" alt="Github profile">

        <div class="textbox flex col g-m">
            <h1>{{ get()['name'] }}</h1>
            <h1 class="adaptive-text-x">
                <WobblyText :text="displayedMessage" :key="idx" />
            </h1>
        </div>

        <img class="arrow" :src="arrowIcon" alt="" srcset="">
    </button>
</template>

<style scoped>
    .profile {
        position:         relative;
        background-color: transparent;
        text-align:       left;
    }

    .profile__image {
        height: clamp(3rem, 20dvw, 12rem);
    }

    /** Verry fancy stuff */
    .textbox {
        padding-bottom: 3rem;
    }

    .arrow {
        position: absolute;
        bottom:   0;
        right:    0;

        height:   4rem;

        animation: arrow-next 3s infinite linear;
    }

    .animated-text {
        opacity:   0;
        position:  relative;
        animation: wobbly 1s infinite linear, reveal .1s linear forwards;
    }

    @keyframes reveal {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

     @keyframes arrow-next {
        0% {
            right: 0;
        }
        50% {
            right: 1rem;
        }
        100% {
            right: 0;
        }
     }

    @keyframes wobbly {
        0% {
            bottom: 0;
        }
        50% {
            bottom: 2px;
        }
        100% {
            bottom: 0;
        }
    }
</style>