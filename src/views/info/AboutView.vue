<script setup lang="ts">
    import "@/assets/styles/info/base.css";
    import WobblyText from "@/components/text/Wobbly.vue";
    // import { about } from "@/info"; 
    import mayGif from "@/assets/animations/may_anggy.gif";
    import { get, portfolioData } from "@/fetch";

</script>

<template>
    <main class="flex col g-xxl">
        <h1 class="about__title font-pixel text-title">
            <span>> </span>
            <WobblyText text="About me" :delay="0.05" />
        </h1>

        <div class="about__content">
            <!-- Presentation image -->
            <div class="full-w flex center  j-center g-xx">
                <!-- <img width="20%" src="https://media.tenor.com/hVRhFeDFW6oAAAAi/anime-wave.gif" /> -->
                <p class="adaptive-text-m">
                    Hey there! 
                    <br>
                    I'm Bhargav :)
                </p>
            </div>

            <div class="divider" />

            <!-- About me content -->
            <p class="adaptive-text-x" v-html="get()[`about`]">
         
                

                
            </p>
        </div>
    </main>
</template>

<style>
    .center{
        /* display: flex; */
        
        justify-content: start;
        align-items: center;

    }
</style>