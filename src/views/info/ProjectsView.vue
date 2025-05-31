<script setup lang="ts">
    import "@/assets/styles/info/base.css";
    import WobblyText from "@/components/text/Wobbly.vue";

    import ProjectCard from "@/components/info/ProjectCard.vue";
    /**IMAGES */
    import ramlethal from "@/assets/img/ramlethal.webp";
    import rubiu5Image from "@/assets/img/rubiu5.webp";
    import archanImage from "@/assets/img/archan.webp";
    import limeCordIcon from "@/assets/img/limecord.webp";
    import ryokoIcon from "@/assets/img/ryoko.webp";
    // import { projects } from "@/info"; 
    import { get } from "@/fetch";
</script>

<template>
    <main class="flex col g-xxl">
        <h1 class="projects__title font-pixel text-title">
            <span>> </span>
            <WobblyText text="Projects" :delay="0.05" />
        </h1>

        <div class="projects__content">
            <!-- Presentation image -->
            <div class="full-w flex j-center a-center">
                <img class="ramlethal-img" :src="ramlethal" />
                <h2>Still not much... ik</h2>
            </div>

            <div class="divider" />

            <!-- About me content -->
            <div class="projects__list flex col g-m">
                <ProjectCard
                    v-for="(project, index) in get()[`projects`]"
                    :key="index"
                    :title="project.title"
                    :description="project.description"
                    :image="project.image"
                    :technologies="project.technologies"
                    :github="project.github"
                />
            </div>
        </div>
    </main>
</template>

<!-- STYLES -->
<style scoped>
    .ramlethal-img { height: clamp(7rem, 20dvw, 20rem) }
</style>