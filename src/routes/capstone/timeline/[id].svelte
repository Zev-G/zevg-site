<script context="module">
    export async function load({params, props}) {
        return {
            props: {
                id: params.id
            }
        };
    }
</script>

<script>
    import PagesNav from "../../../components/PagesNav.svelte";
    import { grade11, grade12, timeline } from "../../../components/capstone/data";
    import Timelines from "../../../components/Timelines.svelte";
    import Timeline from "../../../components/Timeline.svelte";
    import EntrySection from "../../../components/capstone/projects/EntrySection.svelte";
    import SeeMore from "../../../components/SeeMore.svelte";
    import ChessLink from "../../../components/capstone/projects/chess/ChessLink.svelte";

    export let id;
    $: effectiveId = id.length > 3 ? id.substring(3) : null;

    let pageTimeline;
    let gradeTimeline;
    $: {
        if (id.startsWith("11-")) {
            gradeTimeline = grade11;
        } else if (id.startsWith("12-")) {
            gradeTimeline = grade12;
        } else {
            throw new Exception("Invalid URL");
        }

        pageTimeline = gradeTimeline.points[effectiveId];
    };

    let displayedTimeline = null;
    $: {
        id;
        displayedTimeline = findTimelineMatchingDate(Date.now());
    }
    let rootFullEntry;

    
    $: topDisplay = pageTimeline !== null ? pageTimeline.topDisplay : null;

    let showPagesNav = false;

    function findTimelineMatchingDate(date) {
        if (!gradeTimeline || !gradeTimeline.points || !gradeTimeline.points[effectiveId]) {
            return null;
        }
        let timelines = gradeTimeline.points[effectiveId].points;
        if (date <= timelines[0].start) return timelines[0];
        if (date >= timelines[timelines.length - 1].end) {
            return timelines[timelines.length - 1];
        }
        for (let tl in timelines) {
            if (date <= timelines[tl].end) return timelines[tl];
        }
        return timelines[timelines.length - 1];
    }

    function goToEntry(entry) {
        rootFullEntry.expandEntry(entry, true);
    }

    function gradeHasTimeline(grade) {
        if (!grade || !grade.points || grade.points.length == 0) {
            return false;
        }
        for (let point of grade.points) {
            if (point && point.points && point.points.length > 0) return true;
        }
        return false;
    }
</script>

<svelte:head>
  <title>{pageTimeline ? pageTimeline.name : "Loading..."}</title>
</svelte:head>

<div id="nav-home">
    <SeeMore href="/capstone">&lt; Home</SeeMore>
</div>
<div id="content">
    <div id="header">
        <div class="pages-nav">
            <PagesNav bind:showing={showPagesNav}>
                <ul>
                    <li class="home">
                        <a href="/capstone">
                            <div class="hyperlink-content">
                                &lt; Home
                            </div>
                        </a>
                    </li>
                    {#each timeline.points as grade}
                        {#if gradeHasTimeline(grade)}
                            <li class="grade">
                                {grade.name}
                            </li>
                        {/if}
                        {#each grade.points as point, i}
                            {#if point.points.length > 0}
                                <li class={i == effectiveId ? "selected" : ""}>
                                    <a href={`/capstone/timeline/${grade.name.substring(grade.name.length - 2) + "-" + i}`} on:click={() => showPagesNav = false}>
                                        <div class="hyperlink-content">
                                            {point.name}
                                        </div>
                                    </a>
                                </li>
                            {/if}        
                        {/each}
                    {/each}
                    
                </ul>
            </PagesNav>
        </div>
        <h1 class="page-title-s">{pageTimeline ? pageTimeline.name : "Loading..."}</h1>
        <div class="timeline-selector">
            <Timelines timelines={pageTimeline ? pageTimeline.points : null} bind:selected={displayedTimeline}/>
        </div>
    </div>
    <hr>
    {#if displayedTimeline}
        <Timeline timeline={displayedTimeline} readFullEntries={true} on:goToEntry={(event) => goToEntry(event.detail.point)}/>
    {/if}
    <hr class="darker">
    {#if topDisplay !== null}
        <svelte:component this={topDisplay} />
    {/if}
    {#if pageTimeline}
        <EntrySection bind:this={rootFullEntry} entry={pageTimeline} expanded={true}/>
    {/if}
</div>

<style>
    #nav-home {
        position: absolute;
        margin: 0.3rem;
    }
    #nav-home :global(.see-more) {
        font-size: clamp(12px, 4vh, 20px);
        padding: 0;
    }
    #nav-home :global(.inner) {
        padding: 0.2em 0.75em 0.3em 0.75em;
    }
    #nav-home :global(.link-container) {
        background-color: var(--alt3-bg);
    }

    @media(max-width: 550px) {
        #nav-home {
            visibility: hidden;
        }
        #content {
            padding: 1em;
        }
    }

    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }

    hr {
        margin: 1.5rem 0;
        border: none;
        border-top: 5px solid var(--sub-item-bg);
    }
    hr.darker {
        border-top-color: var(--alt3-bg);
    }

    li:not(:last-child) {
        margin-bottom: 0.3em;
    }
    .grade {
        margin-left: 0.5em;
        color: var(--alt2-text);
        font-weight: 500;
    }

    .hyperlink-content {
        margin: 0.5em;
        padding: 0.5em 1em 0.5em 1em;
        border-radius: 5px;
        cursor: pointer;
    }

    .home .hyperlink-content {
        margin-left: 0;
        padding: 0.3em 1em 0.3em 0.5em;
        font-weight: bold;
        font-size: 1.1em;
        font-family: var(--monospace);
    }

    .hyperlink-content:hover {
        background-color: var(--sub-item-bg);
    }

    li.selected .hyperlink-content {
        background-color: var(--main-accent);
    }

    a {
        color: white;
        text-decoration: none;
    }
    

    #content {
        padding: 1.75em 1em 1em 1em;
    }

    #header {
        display: grid;
        grid-template-areas: 
            "nav title"
            ". timelines";
        grid-auto-columns: min-content auto;
        align-items: center;
        gap: 0 1em;
        margin-bottom: 1em;
    }

    .timeline-selector {
        grid-area: timelines;
    }
    .pages-nav {
        grid-area: nav;
    }
    .page-title-s {
        grid-area: title;
    }

</style>
