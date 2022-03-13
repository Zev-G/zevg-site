import QNAView from "../QNAView.svelte";

import ProjectElement from "./ProjectElement";

import SimpleEntry from "./projects/SimpleEntry.svelte";
import InitialPageEntry from "./projects/landing-page/InitialPageEntry.svelte";
import JustGettingStarted from "./projects/landing-page/JustGettingStartedEntry.svelte";
import SiteStructure from "./projects/landing-page/SiteStructure.svelte";

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

function projectElem(date, name, content, detailedView = SimpleEntry) {
    date = Date.parse(date);
    return new ProjectElement(date, date, name, content, [], detailedView);
}

const website = new ProjectElement(Date.parse("Feb 26 2022"), Date.parse("June 23 2022"),
    "Create Capstone site",
    "The first step towards completing my Capstone Project and answering my Capstone Question is to create a good landing page for the project. That's the website you're currently on! This website will receive updates over time but the basic version is complete as of February 27th 2022.", [
        new ProjectElement(
            Date.parse("Feb 26 2022"), Date.parse("Mar 1 2022"), "Initial page",
            "This is the original version of the page, it has one page. This page has a timeline documenting some important goals of the project. Farther down on the page is the Capstone Inquiry Question, later a link to the Capstone Proposal will be linked here. At the bottom of the page is a simple QNA about the site.", [
                projectElem("Feb 26 10:00 2022", "Just getting started", "The very first version of my Capstone Page. All it needs to include is a title. Most of the work going into this version is setup. I need to choose a UI Framework, hosting, routing, and other important behind the scenes decisions.", JustGettingStarted),
                projectElem("Feb 27 2022", "Giving the site structure", "This version of the original page is populated with it's basic functionalities. It contains a title, a simple timeline, my Capstone Inquiry Question, and a QnA about how the site is made at the bottom. The key elements of this page will later serve as navigation to other elements of the site.", SiteStructure),
                projectElem("Feb 28 2022", "Finish the landing page", "The finished (version 1) langing page. This contains all the features of the previous landing page but supports mobile, has animations, and a cleaner code base. Under the hood a lot of work has gone into making the code more reusable, and visually the site has received lots of improvements.")
            ], InitialPageEntry
        ),
        new ProjectElement(
            Date.parse("Mar 1 2022"), Date.parse("Mar 8 2022"), "Capstone Proposal",
            "This version of the site includes everything from the previous version as well as a page putting forth my Capstone Proposal. This site should have a back button to return to the Capstone home page, my Inquiry Question, and answers to a series of questions.", [
                projectElem("Mar 2 2022", "Switch to SvelteKit", "Up until this point in the project I've been using vanilla Svelte, the downside to this is that it only supports single page websites. To add a Capstone Proposal page to my site I need to make my project support multiple pages. This is done using SvelteKit which requires creating a fresh project and importing my old code."),
                projectElem("Mar 4 2022", "Design page", "Before I can answer my Capstone Proposal questions I need to find a format to answer the questions in. I don't want to overwhelm the user with all the answers to all the questions, so I need to create a way of sectioning off specific questions and their answers."),
                projectElem("Mar 7 2022", "Answering the questions", "This is the most straightforward step. I just need to write up answers to all the Capstone Proposal questions in the assignment and add them to my Capstone Proposal page.")
            ]
        ),
        new ProjectElement(
            Date.parse("Mar 8 2022"), Date.parse("Mar 22 2022"), "Projects page",
            "This version of the site is meant to provide a more detailed explanation and documentation of my projects. Each page should contain navigation to switch to a different project. It should contain the project's timeline(s), and write-ups for each element of the timeline.", [
                projectElem("Mar 10 2022", "Handle routing and data", "To host each project's page without hardcoding each one I need to dynamically create them based on the URL. To do this I wil need to use more advanced SvelteKit routing features. Another thing which needs to be changed is the way timeline data is structured. Currently there is no way to have a timeline entry (project) have it's own timeline, so lots of data refactoring needs to be done to make this possible."),
                projectElem("Mar 12 2022", "Navigation between projects", "The first feature all of these project pages will need is the ability to easily switch which project's page you're currently on. To make this easy for the user I want to implement a button which will switch which project you're currently looking at."),
                projectElem("Mar 14 2022", "Multiple timelines", "Each project can be broken into stages, and each of these stages should have its own timelines. This wasn't a feature I was initially planning on implementing, so almost all of the timeline code will need to be re-written to make this possible."),
                projectElem("Mar 18 2022", "Detailed documentation", "Individual entries in a project's timeline provide a brief overview of that feature/goal, but lots of details aren't included since there's only so much you can fit in a paragraph. To give more detailed explanations I want each project page to include a series of sections explaing particular entries in more detail.")
            ]
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
