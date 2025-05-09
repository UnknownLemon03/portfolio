<script setup lang="ts">
    import { ref } from "vue";
    import WobblyText from "@/components/text/Wobbly.vue";
    import { messageList} from "@/info"; 
    import arrowIcon from "@/assets/svg/play.svg";
    import {firstIntro,Name} from "@/info"
    let idx = 0;
    let messageIndex = 0;

    let displayedMessage = ref(firstIntro);
   

    // const randomizeMessage = (): void => {
    //     let randomMessageIndex = Math.floor(Math.random() * (messageList.length - 1));
    //     if (randomMessageIndex === messageIndex) {
    //         randomMessageIndex += 1;
    //     }
    //     messageIndex = randomMessageIndex;
        
    //     // console.warn(randomMessageIndex+"<< Random | Length >> "+messageList.length)
    //     displayedMessage.value = messageList[randomMessageIndex];
        
    //     // Update index so the wobbly component re-renders
    //     idx += 1;
    // }
    let usedIndices: Set<number> = new Set();

    const randomizeMessage = (): void => {
        // Check if all messages have been used
        if (usedIndices.size === messageList.length) {
            usedIndices.clear(); // Reset if all messages have been used
        }

        let randomMessageIndex: number;
        do {
            randomMessageIndex = Math.floor(Math.random() * messageList.length);
        } while (usedIndices.has(randomMessageIndex)); // Ensure we haven't used this index before

        usedIndices.add(randomMessageIndex); // Mark this index as used

        // Update the displayed message
        displayedMessage.value = messageList[randomMessageIndex];

        // Update index so the wobbly component re-renders
        idx += 1;
    }

</script>

<template>
    <button v-on:click="randomizeMessage" class="profile window full-w flex g-x p-x">
        <img src="https://avatars.githubusercontent.com/u/112918205?v=4" class="profile__image full-h" alt="Github profile">

        <div class="textbox flex col g-m">
            <h1>{{ Name }}</h1>
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