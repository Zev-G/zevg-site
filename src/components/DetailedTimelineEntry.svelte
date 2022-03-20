<script>
    import { createEventDispatcher } from "svelte";
    import SimpleEntry from "./capstone/projects/SimpleEntry.svelte";

    import DateView from "./DateView.svelte";
    import SeeMore from "./SeeMore.svelte";
    
    const dispatch = createEventDispatcher();

    export let point;
    export let timeline;

    export let linkFullRead = false;

    $: passed = point.start <= (timeline.at ? timeline.at : Date.now());
    $: index = timeline.points.indexOf(point);

    $: viewMore = point.points.length > 0;

    function readFullEntry() {
        dispatch(
            "goToEntry",
            { point }
        );
    }
</script>

<div class={"detailed-entry " + (passed ? "passed" : "")}>
    <div class="wrapper">
        <div class="content">
            <div class="header">
                <h1>{point.name}</h1>
                <div class="date-view">
                    <DateView date={point.start} />
                </div>
            </div>
            <hr>
            <p>{point.explanation}</p>
            {#if viewMore}
                <SeeMore href={`/capstone/timeline/${index}`}>
                    View progress >
                </SeeMore>
            {:else if linkFullRead && point.detailedView !== SimpleEntry}
                <div>
                    <SeeMore on:click={readFullEntry}>
                        Read full entry >
                    </SeeMore>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>

    .content > :global(.see-more) {
        font-size: 20px;
    }
    .content :global(.inner) {
        background-color: var(--alt-bg);
    }

    .content {
        background-color: var(--item-bg);
        box-shadow: 0px 8px 10px var(--drop-shadow-color);
        width: 50%;
        height: 100%;
        margin: 5% 0;
        padding: 0 2% 2% 2%;
        border-radius: 25px;
        text-align: center;
    }

    .detailed-entry {
        width: 100%;
        color: var(--main-text);
    }

    .date-view {
        text-align: left;
        position: relative;
    }

    .wrapper {
        display: flex;
        justify-content: right;
    }

    hr {
        border: none;
        border-top: solid var(--sub2-item-bg) 3px;
    }

    .passed hr {
        border: none;
        height: 3px;
        background: linear-gradient(to right, var(--main-accent), var(--alt-accent));
    }

    p {
        font-size: 17px;
        /* text-align: left; */
        line-height: 1.5em;
    }

    h1 {
        font-size: 35px;
        margin-bottom: 0.1em;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>