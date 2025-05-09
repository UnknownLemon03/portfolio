<script setup lang="ts">
    import gitLogo from "@/assets/svg/giturl.svg";
    defineProps<{
    title: string;
    description: string;
    image: string;
    technologies?: string[];
    github?: string;
    }>();
    const colors = ["#4ade80", "#60a5fa", "#f472b6", "#facc15", "#a78bfa", "#fb923c"];

    function getRandomColor(index: number): string {
    // Seed the random with index for consistent results on each render
    return colors[index % colors.length];
    }
</script>


<template>
    <div class="project relative flex row g-x p-m overflow-hidden">
        <img class="project__img" :src="image" alt="">

        <div class="project__text full-w flex col">
        <h1 class="adaptive-text-x">
            {{ title }}
          
            <a
            v-if="github"
            :href="github"
            target="_blank"
            rel="noopener noreferrer"
            class="github-link"
            >
                    <img :src="gitLogo" alt="GitHub link" class="github-icon" />
            </a>
        </h1>
        <h3 class="adaptive-text-m">{{ description }}</h3>

        <div v-if="technologies?.length" class="project__techs flex wrap g-xs color-green">
            <span
                v-for="(tech, index) in technologies"
                :key="index"
                class="hashtag"
                :style="{ color: getRandomColor(index) }"
            >
                #{{ tech }}
            </span>
        </div>
    </div>

    </div>
</template>

<style scoped>
    .project {
        height:           10rem;
        background-color: black;
    }
    .project__techs {
        margin-top: 0.5rem;
        font-size: 0.9rem;
        color: var(--fg-light, white);
        opacity: 0.75;
        gap: 0.5rem;
    }

    .hashtag {
        white-space: nowrap;
    }

    /**FANCY STUFF */
    .project:hover::before {
        content:          "";

        position:         absolute;
        left:             -5rem;
        top:              0;
        height:           100%;
        width:            5rem;

        background-color: rgba(255, 255, 255, 0.249);
        transform:        skewX(-15deg);

        animation:        shine 3s cubic-bezier(0.23, 1, 0.320, 1) forwards;
    }

    @keyframes shine {
        0% {
            filter:  blur(10px);
            left:    -10rem;
            opacity: 0;
        }
        50% {
            filter:  blur(0);
            opacity: 1;
        }

        100% {
            filter:  blur(10px);
            left:    100%;
            opacity: 0;
        }
    }
    .github-icon {
    height: 1.25rem;
    opacity: 0.8;
    transition: opacity 0.2s ease;
    }
    .github-icon:hover {
    opacity: 1;
    }
    .github-link {
    display: inline-block;
     padding-left:1rem;
     /* background-color: white; */
    }


</style>