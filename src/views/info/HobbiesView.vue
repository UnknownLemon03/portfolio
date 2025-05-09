<script setup lang="ts">
    import "@/assets/styles/info/base.css";
    import WobblyText from "@/components/text/Wobbly.vue";
    import {hobbies} from "@/info"
    import bridgetSingingGif from "@/assets/animations/bridget_walk.gif";
</script>

<template>
    <main class="flex col g-xxl">
        <h1 class="hobbies__title font-pixel text-title">
            <span>> </span>
            <WobblyText text="Hobbies" :delay="0.05" />
        </h1>

        <main class="hobbies__content grid g-x">
            <img class="hobbies__content__sideimage" src="https://giffiles.alphacoders.com/146/14693.gif" />

            <h3 class="hobbies__content__text" v-html="hobbies">
                
            </h3>
        </main>
    </main>
</template>

<!-- STYLES -->
<style scoped>
    .hobbies__content {
        grid-template-columns: auto 1fr;
    }
    
    .hobbies__content__sideimage { 
        width: clamp(5rem, 20dvw, 10rem);
    }
    @media (max-width: 425px) {
        .hobbies__content {
            /* grid-template-columns: auto 1fr; */
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }

        .hobbies__content__sideimage { 
            width: clamp(12rem, 20dvw, 10rem);
        }
    }

</style>