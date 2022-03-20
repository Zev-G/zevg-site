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
    import { timeline } from "../../../components/capstone/data";
    import Timelines from "../../../components/Timelines.svelte";
    import Timeline from "../../../components/Timeline.svelte";
    import EntrySection from "../../../components/capstone/projects/EntrySection.svelte";

    export let id;

    let displayedTimeline = null;
    $: {
        id;
        displayedTimeline = findTimelineMatchingDate(Date.now());
    }
    let rootFullEntry;

    $: pageTimeline = timeline.points[id];

    let showPagesNav = false;

    function findTimelineMatchingDate(date) {
        if (!timeline || !timeline.points || !timeline.points[id]) {
            return null;
        }
        let timelines = timeline.points[id].points;
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
</script>

<div id="content">
    <div id="header">
        <div class="pages-nav">
            <PagesNav bind:showing={showPagesNav}>
                <ul>
                    {#each timeline.points as point, i}
                        {#if point.points.length > 0}
                            <li class={i == id ? "selected" : ""}>
                                <a href={`/capstone/timeline/${i}`} on:click={() => showPagesNav = false}>
                                    <div class="hyperlink-content">
                                        {point.name}
                                    </div>
                                </a>
                            </li>
                        {/if}        
                    {/each}
                </ul>
            </PagesNav>
        </div>
        <h1 class="page-title-s">{timeline.points[id] ? timeline.points[id].name : "Loading..."}</h1>
        <div class="timeline-selector">
            <Timelines timelines={pageTimeline ? pageTimeline.points : null} bind:selected={displayedTimeline}/>
        </div>
    </div>
    <hr>
    {#if displayedTimeline}
        <Timeline timeline={displayedTimeline} readFullEntries={true} on:goToEntry={(event) => goToEntry(event.detail.point)}/>
    {/if}
    <hr>
    {#if pageTimeline}
        <EntrySection bind:this={rootFullEntry} entry={pageTimeline} expanded={true}/>
    {/if}
</div>

<style>
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

    li:not(:last-child) {
        margin-bottom: 0.3em;
    }

    .hyperlink-content {
        padding: 0.5em 1em 0.5em 1em;
        border-radius: 5px;
        cursor: pointer;
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
        padding: 1em;
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
