<script>
    import { goto } from "$app/navigation";

    import Timeline from "../../components/Timeline.svelte";
    import BigQuestion from "../../components/BigQuestion.svelte";
    import SeeMore from "../../components/SeeMore.svelte";
    import Section from "../../components/Section.svelte";
    import ProjectsPreview from "../../components/ProjectsPreview.svelte";

    import CapstoneQuestion from "../../components/capstone/CapstoneQuestion.svelte";

    import { timeline, grade12, qnas } from "../../components/capstone/data";
    import Timelines from "../../components/Timelines.svelte";

    let displayedTimeline = grade12;

    function navigateToPoint(point) {
        if (point.points.length > 0) {
            goto(`/capstone/timeline/${displayedTimeline.name.substring(displayedTimeline.name.length - 2) + "-" + displayedTimeline.points.indexOf(point)}`);
        }
    }
</script>

<svelte:head>
  <title>Capstone | Zev Godfrey</title>
</svelte:head>

<main>
    <div id="top">
        <div id="heading">
            <h1 class="page-title">My Capstone</h1>
            <h2 class="subtitle">Zev Godfrey</h2>
        </div>
        <div class="timeline-selector">
            <Timelines timelines={timeline.points} bind:selected={displayedTimeline}/>
        </div>
        <Timeline timeline={displayedTimeline} on:goToEntry={(event) => navigateToPoint(event.detail.point)} />
        <BigQuestion question="Capstone Question">
            <CapstoneQuestion/>
        </BigQuestion>
        <SeeMore href="/capstone/proposal">Read more... ></SeeMore>
        <hr>
        <BigQuestion question="My Projects">
            <ProjectsPreview />
        </BigQuestion>
        <hr>
        <BigQuestion question="About Me">
            <p class="about-me">I'm a 17 year old developer living in Victoria BC. I've been programming primarily in Java since early 2020 but I also have smaller projects in a variety of languages and frameworks. Lately I've been creating a handwritten note taking application which I use everyday to take notes at school.</p>
            <br>
            <!-- <p class="about-me">
                In addition to programming and studying for school my favorite activites include: spending time with friends, going for long solo walks, working with kids, and these past few months I've taken up piano and long distance running.
            </p> -->
        </BigQuestion>
        <div class="sections">
            {#each qnas as qna}
                <Section>
                    <h1 slot="header">{qna.question}</h1>
                    <p slot="content">{qna.answer}</p>
                </Section>
            {/each}
        </div>
    </div>
	
</main>

<style>

    hr {
        width: 90%;
        margin-top: 3vh;
        border: none;
        border-top: 5px solid var(--sub-item-bg);
    }

    .timeline-selector {
        padding-left: clamp(10px, 2vw, 30px);
        padding-bottom: clamp(2px, 1vh, 10px);
    }

    .sections h1 {
        margin: 0;
    }
    .sections {
        margin: 4rem 2vw 0 2vw;
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 1.5vh
    }
	
    main {
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: column;
    }

    .about-me {
        font-size: clamp(18px, 1.5vw, 25px);
        margin: 0 2vw;
    }

    #top {
        margin-bottom: 3vh;
        padding: 8px;
    }

    #heading {
        margin-bottom: 3vh;
    }

</style>
