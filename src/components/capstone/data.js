import ProjectElement from "./ProjectElement";

import SimpleEntry from "./projects/SimpleEntry.svelte";
import InitialPageEntry from "./projects/landing-page/InitialPageEntry.svelte";
import JustGettingStarted from "./projects/landing-page/JustGettingStartedEntry.svelte";
import SiteStructureEntry from "./projects/landing-page/SiteStructureEntry.svelte";
import FinishingLandingPageEntry from "./projects/landing-page/FinishingLandingPageEntry.svelte";
import SwitchToSvelteKitEntry from "./projects/landing-page/SwitchToSvelteKitEntry.svelte";
import DesignPageEntry from "./projects/landing-page/DesignPageEntry.svelte";
import RoutingEntry from "./projects/landing-page/RoutingEntry.svelte";
import NavigationEntry from "./projects/landing-page/NavigationEntry.svelte";
import MultipleTimelinesEntry from "./projects/landing-page/MultipleTimelinesEntry.svelte";
import DetailedExplanationEntry from "./projects/landing-page/DetailedExplanationEntry.svelte";
import ChessLink from "./projects/chess/ChessLink.svelte";

export const qnas = [
    {
        question: "How was this website made?",
        answer: "This website was created using vanilla Svelte. The timeline was quite difficult to implement and so an earlier version of it was designed on Figma before being created in the actual project. Many thanks go to CSS Tricks and W3Schools for providing great documentation for JS, HTML and CSS."
    },
    {
        question: "Where is this site's code?",
        answer: "You can check out the code for this website on my github at https://github.com/Zev-G/zevg-site."
    },
    {
        question: "How is this site hosted?",
        answer: "This website is hosted using Vercel on a custom domain purchased from Google Domains."
    }
];

function projectElem(date, name, content, detailedView = SimpleEntry, progress = null) {
    date = Date.parse(date);
    return new ProjectElement(date, date, name, content, [], detailedView, progress);
}

const website = new ProjectElement(Date.parse("Feb 26 2022"), Date.parse("June 23 2022"),
    "Create Capstone site",
    "The first step towards completing my Capstone Project and answering my Capstone Question is to create a good landing page for the project. That's the website you're currently on! This website will receive updates over time but the basic version is complete as of February 27th 2022.", [
        new ProjectElement(
            Date.parse("Feb 26 2022"), Date.parse("Mar 1 2022"), "Initial page",
            "This is the original version of the page, it has one page. This page has a timeline documenting some important goals of the project. Farther down on the page is the Capstone Inquiry Question, later a link to the Capstone Proposal will be linked here. At the bottom of the page is a simple QNA about the site.", [
                projectElem("Feb 26 10:00 2022", "Just getting started", "The very first version of my Capstone Page. All it needs to include is a title. Most of the work going into this version is setup. I need to choose a UI Framework, hosting, routing, and other important behind the scenes decisions.", JustGettingStarted, "done"),
                projectElem("Feb 27 2022", "Giving the site structure", "This version of the original page is populated with it's basic functionalities. It contains a title, a simple timeline, my Capstone Inquiry Question, and a QnA about how the site is made at the bottom. The key elements of this page will later serve as navigation to other elements of the site.", SiteStructureEntry, "done"),
                projectElem("Feb 28 2022", "Finish the landing page", "The finished (version 1) langing page. This contains all the features of the previous landing page but supports mobile, has animations, and a cleaner code base. Under the hood a lot of work has gone into making the code more reusable, and visually the site has received lots of improvements.", FinishingLandingPageEntry, "done")
            ], InitialPageEntry, "done"
        ),
        new ProjectElement(
            Date.parse("Mar 1 2022"), Date.parse("Mar 8 2022"), "Capstone Proposal",
            "This version of the site includes everything from the previous version as well as a page putting forth my Capstone Proposal. This site should have a back button to return to the Capstone home page, my Inquiry Question, and answers to a series of questions.", [
                projectElem("Mar 2 2022", "Switch to SvelteKit", "Up until this point in the project I've been using vanilla Svelte, the downside to this is that it only supports single page websites. To add a Capstone Proposal page to my site I need to make my project support multiple pages. This is done using SvelteKit which requires creating a fresh project and importing my old code.", SwitchToSvelteKitEntry, "done"),
                projectElem("Mar 4 2022", "Design page", "Before I can answer my Capstone Proposal questions I need to find a format to answer the questions in. I don't want to overwhelm the user with all the answers to all the questions, so I need to create a way of sectioning off specific questions and their answers.", DesignPageEntry, "done"),
                projectElem("Mar 7 2022", "Answering the questions", "This was the most straightforward step. I just needed to write up answers to all the Capstone Proposal questions in the assignment and add them to my Capstone Proposal page.", SimpleEntry, "done")
            ], SimpleEntry, "done"
        ),
        new ProjectElement(
            Date.parse("Mar 8 2022"), Date.parse("Mar 22 2022"), "Projects page",
            "This version of the site is meant to provide a more detailed explanation and documentation of my projects. Each page should contain navigation to switch to a different project. It should contain the project's timeline(s), and write-ups for each element of the timeline.", [
                projectElem("Mar 10 2022", "Handle routing and data", "To host each project's page without hardcoding each one I need to dynamically create them based on the URL. To do this I wil need to use more advanced SvelteKit routing features. Another thing which needs to be changed is the way timeline data is structured. Currently there is no way to have a timeline entry (project) have it's own timeline, so lots of data refactoring needs to be done to make this possible.", RoutingEntry, "done"),
                projectElem("Mar 12 2022", "Navigation between projects", "The first feature all of these project pages will need is the ability to easily switch which project's page you're currently on. To make this easy for the user I want to implement a button which will switch which project you're currently looking at.", NavigationEntry, "done"),
                projectElem("Mar 14 2022", "Multiple timelines", "Each project can be broken into stages, and each of these stages should have its own timelines. This wasn't a feature I was initially planning on implementing, so almost all of the timeline code will need to be re-written to make this possible.", MultipleTimelinesEntry, "done"),
                projectElem("Mar 18 2022", "Detailed documentation", "Individual entries in a project's timeline provide a brief overview of that feature/goal, but lots of details aren't included since there's only so much you can fit in a paragraph. To give more detailed explanations I want each project page to include a series of sections explaining particular entries in more detail.", DetailedExplanationEntry, "done")
            ], SimpleEntry, "done"
        )
], SimpleEntry, "done");

const chess = new ProjectElement(
    Date.parse("Apr 10 2022"), Date.parse("Apr 10 2022"), "Make a chess Site",
    "I've created chess twice, but never for the web. The plan is to create a simple two-player chess game and have it hosted on a website. This chess game needs to meet the following criteria: include all official chess rules, be built with either React or Svelte, and look good.", [
        new ProjectElement(Date.parse("Mar 18 2022"), Date.parse("Apr 20 2022"), "Basic Game", "",
            [
                projectElem("Mar 21 2022", "Project and hosting setup", "The first step in starting this project is deciding how I want to structure it. I (currently) plan on using Svelte for my UI framework and Vercel for hosting.", SimpleEntry, "done"),
                projectElem("Mar 26 2022", "Board and pieces", "Once the page is hosted the next step is to initialize a chess board with the correct pieces. This will require picking a color scheme and images for the chess pieces.", SimpleEntry, "done"),
                projectElem("Mar 31 2022", "Basic piece moving", "This will be the first piece of logic that needs to be implemented. Every piece moves in a unique way, so a way of generating moves based on the board state and piece type needs to be created.", SimpleEntry, "done"),
                projectElem("Apr 5 2022", "Complex piece moving", "During this section of the project I will add more complex movements to certain pieces. This includes castling and en passant.", SimpleEntry, "done"),
                projectElem("Apr 10 2022", "Game rules", "Once the pieces can move the rules of the game need to be added. Chess has quite a few rules but some which will be difficult to implement are: pawn promotion, checkmating, not moving into check, and all of chess' draw conditions.", SimpleEntry, "done"),
                projectElem("Apr 15 2022", "Players and turns", "The last thing which will need to be created for a functional game of chess is turn management and displaying the winner.", SimpleEntry, "done")
            ], SimpleEntry, "done"
        ),
        new ProjectElement(Date.parse("Apr 20 2022"), Date.parse("May 3 2022"), "Creating Computer Opponents", "",
            [
                projectElem("Apr 22 2022", "Allow for computer opponents", "At this point in the chess project the code doesn't support non-human opponents. Some code refactoring will need to be done to allow for the computer to handle its own turns.", SimpleEntry, "done"),
                projectElem("Apr 25 2022", "Implement Minimax opponent", "The plan isn't to create an insane computer opponent, just a Minimax based opponent. An explanation of the Minimax Algorithm can be found with a quick Google search.", SimpleEntry, "done"),
                projectElem("May 1 2022", "Optimization", "To make the Minimax opponent more effective I'll need to optimize the program so that moves can be simulated more efficiently.", SimpleEntry, "done")
            ], SimpleEntry, "done"
        ),
        new ProjectElement(Date.parse("May 3 2022"), Date.parse("June 1 2022"), "Polishing and Extra Features", "",
            [
                projectElem("May 7 2022", "Draggable pieces", "Players should have the ability to drag pieces to move them.", SimpleEntry, "done"),
                projectElem("May 12 2022", "Animated piece movement", "The movement of pieces being animated rather than jumping from spot to spot. This is a QoL feature which would make the game more visually appealing.", SimpleEntry, "done"),
                projectElem("May 16 2022", "Move side bar", "Throughout games it would be nice to be able to see a simple list of all the moves which have occured. The plan is to display this to the right of the chess board.", SimpleEntry, "done"),
                projectElem("May 20 2022", "Board editor", "Currently, making visual graphics of chess boards is quite tedious, especially when you want a board of a size other than 8x8. I want to give users a tool to easily design a chessboard of various sizes.", SimpleEntry, "done"),
                projectElem("May 27 2022", "Done", "At this point the basic chess game (and a little more) I envisioned has been created. I want to continue to add features to it but I feel that at this point I have a nice looking and functional chess game.", SimpleEntry, "done")
            ], SimpleEntry, "done"
        )
    ],
SimpleEntry, "done", ChessLink);

const nextYear = new ProjectElement(
    Date.parse("Jun 1 2022"), Date.parse("Jun 1 2022"), "Get ready for next year",
    "Decide what my future goals are for my grade 12 year and document them in a timeline similar to this one."
);
nextYear.progress = "done";

export const grade11 = new ProjectElement(
    Date.parse("Feb 1 2022"), Date.parse("Jun 23 2022"), "Grade 11", "",
    [
        website, chess, nextYear
    ]
);

const expectationsForTheYear = new ProjectElement(
    Date.parse("Sep 30 2022"), Date.parse("Sep 30 2022"), "This year's expectations",
    "This year my primary focus is going to be on school work, and with three tough academics in my first semester that means good time management. As a result I won't be able to dedicate as much time to my capstone as I did in grade 11. That being said, I still want to continue to work on my capstone this year, just at a slower pace than previously."
);

const inkAev = new ProjectElement(
    Date.parse("Jan 10 2023"), Date.parse("Jan 10 2023"), "Create a Notetaking App", "Every day in class I use my ASUS Zenbook Pro Flip OLED 15 UP6502ZA to take notes with a Renaisser 520C stylus. This school year I've tried out a bunch of notetaking applications, but none have been to my liking. This will be my biggest project, but I would like to create an application to take handwritten notes for my last semester of high school and for university.", []
);
inkAev.progress = "done";

const hackathon = new ProjectElement(
    Date.parse("May 1 2023"), Date.parse("May 1 2023"), "Hackathon", "I teamed up with two fellow programmers Alex Skvortsov and Isaac Nelson in the Royal Bay Hackathon. We created an application to redistrubte would-be wasted food to those in need. I designed and created both the homepage and the donation page, populated the markers on the map, created the navigational system, and generated our icons. During the brainstorming portion of the project I came up with the originating idea of creating an app to redistribute food.", []
);
hackathon.progress = "done";

export const grade12 = new ProjectElement(
    Date.parse("Sep 6 2022"), Date.parse("Jun 23 2023"), "Grade 12", "", [
        expectationsForTheYear, inkAev, hackathon
    ]
)

export const timeline = new ProjectElement(
    Date.parse("Feb 1 2022"), Date.parse("Jun 23 2023"), "Capstone Timeline",
    "My Capstone Timeline", [
        grade11, grade12
    ]
);
