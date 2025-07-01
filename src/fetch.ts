import { reactive } from "vue";

export type Technology = {
  src: string;
  alt: string;
};

export type Social = {
  href: string;
  src: string;
  alt: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
};

export type PortfolioData = {
  technologies: Technology[];
  socials: Social[];
  name: string;
  firstIntro: string;
  messageList: string[];
  projects: Project[];
  about: string;
  workStation: string;
  hobbies: string;
};

// Start with empty initial data
const portfolioData = reactive<PortfolioData>({
  technologies: [],
  socials: [],
  name: "",
  firstIntro: "",
  messageList: [],
  projects: [],
  about: "",
  workStation: "",
  hobbies: "",
});


const set = <K extends keyof PortfolioData>(key: K, value: PortfolioData[K]): void => {
  portfolioData[key] = value;
};

const get = () => {
  return portfolioData;
};

async function FetchData(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch data");
    const data: PortfolioData = await response.json();
    const locationMessage = await guessUserLocation();
    Object.assign(portfolioData, data);
    console.log("Portfolio data loaded successfully: --- ", portfolioData);
  } catch (err) {
    console.error("Error loading portfolio data:", err);
  }
}

async function guessUserLocation(): Promise<string> {
  try {
    const res = await fetch('https://ipwho.is/');

    const data = await res.json();

    const location = data?.city || data?.region || data?.country_name || "your area";

    const messages = [
      `Oh, let me guess... you live in ${location}?`,
      `How's the weather today in ${location}?`,
      `I've heard there's a great local dish in ${location}, is it true?`,
      `People from ${location} are always cool 😎`,
      `Did you know someone just searched from ${location} too?`,
      `${location} sounds like a nice place to be.`,
      `I bet there’s something amazing happening in ${location}!`,
      `From ${location}? That’s awesome!`,
      `So you're browsing from ${location}, huh? Small world.`,
      `Heard the sunsets in ${location} are beautiful 🌇`,
    ];

    const message = messages[Math.floor(Math.random() * messages.length)];

    return message
  } catch (err) {
    console.error('Location fetch failed:', err);
    return "Hmm... couldn't guess your location.";
  }
}

export { FetchData, get, set, portfolioData ,guessUserLocation};
