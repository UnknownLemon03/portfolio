<script setup lang="ts">
import { ref } from "vue";
import { technologies ,socials} from "@/info"; 
// Technologies
import rustLogo from "@/assets/svg/rust.svg";
import typescriptLogo from "@/assets/svg/typescript.svg";
import javaLogo from "@/assets/svg/java.svg";
import dockerLogo from "@/assets/svg/docker.svg";
import vueLogo from "@/assets/svg/vue.svg";
import gitLogo from "@/assets/svg/git.svg";
import linuxLogo from "@/assets/svg/linux.svg";

// Socials
import githubLogo from "@/assets/svg/github.svg";
import twitterLogo from "@/assets/svg/twitter.svg";
import youtubeLogo from "@/assets/svg/youtube.svg";
import discordLogo from "@/assets/svg/discord.svg";

let showSocials = ref(false);

const technologiesw = [
  { src: rustLogo, alt: "The Rust Programming Language logo" },
  { src: typescriptLogo, alt: "Typescript logo" },
  { src: javaLogo, alt: "Java Programming Language logo" },
  { src: dockerLogo, alt: "Docker logo" },
  { src: gitLogo, alt: "Git logo" },
  { src: vueLogo, alt: "Vue.js logo" },
  { src: linuxLogo, alt: "Linux logo" },
  { src: rustLogo, alt: "The Rust Programming Language logo" },
  { src: typescriptLogo, alt: "Typescript logo" },
  { src: javaLogo, alt: "Java Programming Language logo" },
  { src: dockerLogo, alt: "Docker logo" },
  { src: gitLogo, alt: "Git logo" },
  { src: vueLogo, alt: "Vue.js logo" },
  { src: linuxLogo, alt: "Linux logo" },
  { src: rustLogo, alt: "The Rust Programming Language logo" },
  { src: typescriptLogo, alt: "Typescript logo" },
  { src: javaLogo, alt: "Java Programming Language logo" },
  { src: dockerLogo, alt: "Docker logo" },
  { src: gitLogo, alt: "Git logo" },
  { src: vueLogo, alt: "Vue.js logo" },
  { src: linuxLogo, alt: "Linux logo" },
];
</script>


<template>
    <div class="window langs-and-socials grid">
        <div class="selector grid g-x">
            <button
                :class="showSocials.valueOf() ? 'inactive' : 'active'"
                @click="showSocials = false"
            >
                <h2>Tech</h2>
            </button>

            <button
                :class="showSocials.valueOf() ? 'active' : 'inactive'"
                @click="showSocials = true"
            >
                <h2>Socials</h2>
            </button>
        </div>

        <!-- TECHNOLOGIES I USE -->
        <div v-if="!showSocials" class="content full-h full-w">
            <div class="item-list flex g-xxl j-center wrap p-x">
                <img
                v-for="(tech, index) in technologies"
                :key="index"
                class="item"
                :src="tech.src"
                :alt="tech.alt"
                />
            </div>
        </div>

        <!-- MY SOCIALS :3 -->
        <div v-else class="content full-h full-w">
        <div class="item-list flex g-xxl j-center wrap p-x">
            <a
            v-for="(social, index) in socials"
            :key="index"
            :href="social.href"
            target="_blank"
            >
            <img class="item" :src="social.src" :alt="social.alt" />
            </a>
        </div>
        </div>

    </div>
</template>

<style scoped>
    .active {
        background-color: var(--fg-light);
    }
    .active * {
        color: var(--bg-dark);
    }

    .inactive {
        opacity: 0.5;
    }

    .langs-and-socials {
        grid-template-rows: auto 1fr;
    }

    .selector {
        border-bottom:         var(--border-width) solid var(--fg-light);
        grid-template-columns: 1fr 1fr;
    }
    .selector button {
        padding: .2rem 1rem;
    }

    .content {
        padding: 1rem;
    }

    .item {
        height:  clamp(3rem, 15dvw, 6rem);
        filter:  saturate(0);
    }
    .item:hover {
        filter: none;
        scale: .97;
    }
</style>