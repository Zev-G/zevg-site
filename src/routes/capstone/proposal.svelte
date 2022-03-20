<script>
    import SeeMore from "../../components/SeeMore.svelte";
    import CapstoneQuestion from "../../components/capstone/CapstoneQuestion.svelte";
    import Label from "../../components/Label.svelte";
    import Section from "../../components/Section.svelte";
</script>

<svelte:head>
  <title>Capstone Proposal | Zev Godfrey</title>
</svelte:head>

<div id="proposal">
    <div class="back">
        <SeeMore href="/capstone">&lt; Back</SeeMore>
    </div>
    <div id="heading">
        <h1 class="page-title">Capstone Proposal</h1>
    </div>
    <hr>
    <div id="page-content">
        <div class="inquiry-question">
            <Label>Inquiry Question</Label>
            <CapstoneQuestion/>
        </div>
        <Section>
            <h1 class="header-h1" slot="header">Why have I chosen this capstone question?</h1>
            <p slot="content">I've been creating desktop applications for the past two years and in that time it has become clear to me that the future of apps is the web. Over the course of my capstone I want to transfer my skills in Java to designing good looking, functional web sites.</p>
        </Section>
        <Section>
            <h1 class="header-h1" slot="header">
                Major steps in capstone project:
            </h1>
            <div slot="content">
                <p>
                    To complete my capstone project I will need to learn many elements of web development. In my experience the most effective way to learn programming is with projects, so the plan is to create lots of projects meant to teach me specific elements of web development.
                </p>
                <p>
                    The first of these projects is the webpage you're currently on. As I work through and complete these projects I'll (hopefully) get a better understanding of the gaps in my abilities allowing me to pick out better future projects. A general outline of my capstone progress can be seen on the timeline on this site's homepage.
                </p>
                <SeeMore href="/capstone">Go to timeline</SeeMore>
            </div>
        </Section>
        <Section>
            <h1 class="header-h1" slot="header">Possible limitations/obstacles that I may experience:</h1>
            <div slot="content">
                <p>
                    Programming and learning to program is hard and takes a lot of time. Some of my previous projects have taken hundreds of hours and I expect this trend of large time commitments to continue. With all my other obligations finding this time could pose a real challenge.
                </p>
                <p>
                    Since these projects take so long I need to be inspired, and some projects just don't do that for me. This threatens to be a large obstacle due to the sheer number of technologies involved in web development. To combat this I want to be flexible when it comes to my goals so that I don't get stuck trying to find the inspiration to work on a project I don't care about.
                </p>
            </div>
        </Section>
        <Section>
            <h1 class="header-h1" slot="header">How will my capstone progress be documented?</h1>
            <div slot="content">
                <p>
                    Documentation for my capstone will appear on my website. The details of this are to be determined.
                </p>
            </div>
        </Section>
    </div>
</div>


<style>

    .back {
        position: absolute;
        margin: 0.5em 1em;
    }

    .back :global(.see-more) {
        font-size: 18px;
    }

    .header-h1 {
        margin: 0;
    }

    hr {
        width: 90%;
        border: none;
        border-top: 5px solid var(--sub-item-bg);
    }

    .inquiry-question {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 20px;
        margin-bottom: 4vh;
    }

    .inquiry-question > :global(p) {
        margin-top: 0.2em;
        margin-bottom: 0.5em;
    }

    #proposal {
        display: flex;
        flex-direction: column;
        gap: 7.5px;
        height: 100%;
    }

    #page-content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px 6vw;

        height: 100%;
        /* background-color: var(--alt-bg); */
    }

    #heading {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        text-align: center;
    }

    @media(max-width: 550px) {
        .back {
            visibility: hidden;
        }
    }

</style>