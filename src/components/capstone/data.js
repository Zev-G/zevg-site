import QNAView from "../QNAView.svelte";
import ProjectElement from "./ProjectElement";

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

const website = new ProjectElement(Date.parse("Feb 26 2022"), Date.parse("June 23 2022"),
    "Create landing page",
    "The first step towards completing my Capstone Project and answering my Capstone Question is to create a good landing page for the project. That's the website you're currently on! This website will receive updates over time but the basic version is complete as of February 26th 2022.", [
        new ProjectElement(
            Date.parse("Feb 26 2022"), Date.parse("Feb 26 2022"), "Initial page",
            "This is the original version of the page, it has one page. This page has a timeline documenting some important goals of the project. Farther down on the page is the Capstone Inquiry Question, later a link to the Capstone Proposal will be linked here. At the bottom of the page is a simple QNA about the site."
        ),
        new ProjectElement(
            Date.parse("Mar 1 2022"), Date.parse("Mar 1 2022"), "Capstone Proposal",
            "This version of the site includes everything from the previous version as well as a page putting forth my Capstone Proposal. This site should have a back button to return to the Capstone home page, my Inquiry Question, and answers to a series of questions."
        ),
        new ProjectElement(
            Date.parse("Mar 20 2022"), Date.parse("Mar 2- 2022"), "Projects page",
            "This version of the site is meant to provide a more detailed explanation and documentation of my projects. Each page should contain navigation to switch to a different project. It should contain the project's timeline(s), and write-ups for each element of the timeline."
        )
]);

const chess = new ProjectElement(
    Date.parse("Apr 10 2022"), Date.parse("Apr 10 2022"), "Make a Chess Site",
    "I've already created chess twice, but never for the web. The plan is to create a simple two-player chess game and have it hosted on a website. This chess game needs to meet the following criteria: include all official chess rules, be built with either React or Svelte, allow games to be loaded from FENs, and look decent."
);

const nextYear = new ProjectElement(
    Date.parse("Jun 1 2022"), Date.parse("Jun 1 2022"), "Get ready for next year",
    "Decide what my future goals are for my grade 12 year and document them in a timeline similar to this one."
);

export const timeline = new ProjectElement(
    Date.parse("Feb 1 2022"), Date.parse("Jun 23 2022"), "Capstone Timeline",
    "My Capstone Timeline", [
        website, chess, nextYear
    ]
);
