<script>
    import { onMount } from "svelte";

    import DateView from "./DateView.svelte";
    import DetailedTimelineEntry from "./DetailedTimelineEntry.svelte";
    import TimelinePoint from "./TimelinePoint.svelte";

    export let timeline;
    
    let at = timeline.at ? timeline.at : Date.now();
    let start = timeline.start;
    let end = timeline.end;
    let points = timeline.points;

    // Media Query
    let query = "(min-width: 1050px)";
    let mql;
    let mqlListener;
    let wasMounted;
    let matches;

    onMount(() => {
        wasMounted = true;
        return () => {
            removeActiveListener();
        };
    });

    $: {
        if (wasMounted) {
            removeActiveListener();
            addNewListener();
        }
    }

    function addNewListener() {
        mql = window.matchMedia(query);
        mqlListener = (result) => matches = result.matches;
        mql.addEventListener("change", mqlListener);
        matches = mql.matches;
    }
    function removeActiveListener() {
        if (mql && mqlListener) {
            mql.removeEventListener("change", mqlListener);
        }
    }

    let size = 700;
    let filled = Math.min(1, (at - start) / (end - start));

    function calcPoint(date) {
        return Math.round(size * Math.min(1, (date - start) / (end - start)));
    }

    let expandedPoint = null;

    function setExpandedPoint(point) {
        if (expandedPoint !== null) {
            expandedPoint.collapse();
        }
        if (point !== null && point.detail.expanded) {
            expandedPoint = point.detail;
        } else {
            expandedPoint = null;
        }
    }

    let originallyExpanded = null;
    if (points.length != 0) {
        for (let point of points) {
            if (point.date <= at) originallyExpanded = point;
            else if (originallyExpanded == null) {
                originallyExpanded = point;
                break;
            }
        }
    }
</script>

<div class="timeline-wrapper">
    {#if filled !== 1}
        <div style="position: absolute;">
            <div class="date-marker " style={"top: " + (calcPoint(at)) + "px;"}>
                <DateView date={at} showYear={false} />
            </div>
        </div>
    {/if}
    <div class="timeline" style={"--size: " + size + "px;"}>
        <svg class="timeline-svg">
    
            <defs>
                <linearGradient id="filled-gradient" gradientTransform="rotate(90)">
                    <stop offset="5%"  stop-color="var(--main-accent)" />
                    <stop offset="95%" stop-color="var(--alt-accent)" />
                </linearGradient>
            </defs>
    
            <rect class="start" width="80" height="15" />
            <rect class="total" x="27.5" y="10" width="25" height={size - 25} />
            <rect class="filled" x="27.5" y="10" width="25" style={"--filled: " + (size * filled) + "px;"} />
            <rect class="end" width="80" height="15" y={size - 15} />
            {#if filled === 1}
                <rect class="end-filled" width="80" y={size - 15} />
            {/if}
        </svg>
        <div class="main-dates">
            <div class="start-date">
                <DateView date={start} />
            </div>
            <div class="end-date">
                <DateView date={end} />
            </div>
        </div>
        <div class="points">
            {#each points as point}
                <div class="point" style={"top: " + (calcPoint(point.date) - 16) + "px;"}>
                    {#if point === originallyExpanded}
                        <TimelinePoint beginExpanded={true} point={point} timeline={timeline} on:expanded={setExpandedPoint}/>
                    {:else}
                        <TimelinePoint point={point} timeline={timeline} on:expanded={setExpandedPoint}/>
                    {/if}
                </div>
            {/each}
        </div>
        {#if expandedPoint !== null && matches}
            <DetailedTimelineEntry preview={expandedPoint.preview} content={expandedPoint.content} passed={expandedPoint.passed} date={expandedPoint.date} />
        {/if}
    </div>
</div>

<style>
    :global(*) {
        --tl-animation-length: 2s;
    }

    .points {
        position: absolute;
        --left: calc(80px + 4vw);
        left: var(--left);
        width: calc(100% - var(--left));
    }
    @media (max-width: 800px) {
        .date-marker {
            visibility: hidden;
        }
    }
    .date-marker {
        position: absolute;
        left: calc(-3em - 10px);
        width: 6em;
        opacity: 0;
        animation: 0.2s load-at-mark calc(var(--tl-animation-length) - 0.1s);
        animation-fill-mode: forwards;
    }
    .point {
        position: absolute;
        width: 100%;
    }

    .timeline {
        display: flex;
        gap: 12px;
        height: var(--size);
    }
    .timeline-wrapper {
        margin: 1vh 4vw;
        width: 100%;
        width: calc(100% - 8vw);
    }

    .timeline-svg {
        width: 80px;
        height: 100%;
    }

    .main-dates {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .total, .end {
        fill: rgba(218, 218, 218, 0.178);
    }

    .start {
        fill: var(--main-accent);
    }
    .filled {
        fill: url("#filled-gradient");
    }
    .end-filled {
        fill: var(--alt-accent);
    }

    .filled {
        animation: fill var(--tl-animation-length) ease-in-out;
        height: var(--filled);
    }
    .end-filled {
        animation: 0.2s fill-end calc(var(--tl-animation-length) - 0.3s);
        animation-fill-mode: forwards;
    }

    @keyframes load-at-mark {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fill {
        from {
            height: 0px
        }
        to {
            height: var(--filled);
        }
    }

    @keyframes fill-end {
        from {
            height: 0px;
        }
        to {
            height: 15px;
        }
    }
</style>