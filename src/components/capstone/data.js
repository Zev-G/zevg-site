import QNAView from "../QNAView.svelte";

export const qnas = [
    {
        question: {
            text: "How was this website made?",
            component: QNAView
        },
        answer: {
            text: "This website was created using vanilla Svelte. The timeline was quite difficult to implement and so an earlier version of it was designed on Figma before being created in the actual project. Many thanks go to CSS Tricks and W3Schools for providing great documentation for JS, HTML and CSS.",
            component: QNAView
        }
    },
    {
        question: {
            text: "Where is this site's code?",
            component: QNAView
        },
        answer: {
            text: "Currently this site is private on my github, but once I feel it's more complete I'll make the project public. Once that happens you will be able to find it at https://www.github.com/Zev-G.",
            component: QNAView
        }
    },
    {
        question: {
            text: "How is this site hosted?",
            component: QNAView
        },
        answer: {
            text: "This website is hosted using Vercel on a custom domain purchased from Google Domains.",
            component: QNAView
        }
    }
];

export const timeline = {
    start: Date.parse("Feb 1 2022"),
    end: Date.parse("Jun 23 2022"),
    points: [
        {
            date: Date.parse("Feb 26 2022"),
            preview: "Create landing page",
            content: "The first step towards completing my Capstone Project and answering my Capstone Question is to create a good landing page for the project. That's the website you're currently on! This website will receive updates over time but the basic version is complete a of Feb 26th 2022."
        },
        {
            date: Date.parse("Mar 20 2022"),
            preview: "Make a Chess Site",
            content: "I've already created chess twice, but never for the web. The plan is to create a simple two-player chess game and have it hosted on a website. This chess game needs to meet the following criteria: include all official chess rules, be built with either React or Svelte, allow games to be loaded from FENs, and look decent."
        },
        {
            date: Date.parse("Jun 1 2022"),
            preview: "Get ready for next year",
            content: "Decide what my future goals are for my grade 12 year and document them in a timeline similar to this one."
        }
    ]
}

    