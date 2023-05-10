<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    import DateView from "./DateView.svelte";
    import DetailedTimelineEntry from "./DetailedTimelineEntry.svelte";
    import TimelinePoint from "./TimelinePoint.svelte";

    export let timeline;
    export let readFullEntries = false;

    let start = timeline.start;
    let end = timeline.end;
    let points = timeline.points;
    let at = Date.now();
    $: start = timeline.start;
    $: end = timeline.end;
    $: points = timeline.points;

    let ogTimeline = timeline;
    let animateIn = true;

    $: animateIn = animateIn && ogTimeline === timeline;
    let lastPoint = getLastPoint();
    let lastPointDate = lastPoint ? lastPoint.start : start;
    let animationTime = 1.5 * (lastPointDate - start) / (Math.min(at, end) - start) * 1000;
    let animationDone = false;
    setTimeout(() => animationDone = true, animationTime);

    // Media Query
    let query = "(min-width: 1050px)";
    let mql;
    let mqlListener;
    let wasMounted;
    let matches = true;

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

    export let size = 600;
    $: filled = Math.min(1, (at - start) / (end - start));
    $: showDateMarker = filled !== 1 && at >= start;

    function calcPoint(date) {
        return Math.round(size * Math.min(1, (date - start) / (end - start)));
    }

    // Should find a fix to doing this at some point.
    $: dateYPos = "top: " + Math.round(size * Math.min(1, (at - start) / (end - start))) + "px;";

    let expandedPoints = new Map();
    $: expandedPoint = expandedPoints.get(timeline);
    $: {
        if (!expandedPoints.has(timeline)) {
            expandedPoint = getLastPoint();
            expandedPoints.set(timeline, expandedPoint);
        }
    }

    function setExpandedPoint(point) {
        if (point !== null && point.detail.expanded) {
            expandedPoint = point.detail.point;
            expandedPoints.set(timeline, expandedPoint);
        } else {
            expandedPoint = null;
            expandedPoints.set(timeline, null);
        }
    }


    function getLastPoint() {
        if (!points || points.length < 1 || points[0].start > at) return null;
        let originallyExpanded = null;
        if (points.length != 0) {
            for (let point of points) {
                if (point.start <= at) originallyExpanded = point;
                else if (originallyExpanded == null) {
                    originallyExpanded = point;
                    break;
                }
            }
        }
        return originallyExpanded;
    }
    
</script>

<div class="timeline-wrapper">
    <div style={"position: absolute" + (showDateMarker ? "" : "; visibility: hidden;")}>
        <div class="date-marker " style={dateYPos}>
            <DateView date={at} showYear={false} />
        </div>
    </div>
    <div class="timeline" style={"--size: " + size + "px;"}>
        <svg class="timeline-svg">
    
            <defs>
                <linearGradient id="filled-gradient" gradientTransform="rotate(90)">
                    <stop offset="5%"  stop-color="var(--main-accent)" />
                    <stop offset="95%" stop-color="var(--alt-accent)" />
                </linearGradient>
            </defs>
    
            <rect class="total" x="27.5" y="15" width="25" height={size - 30} />
            <rect rx="2" class={"start" + (at < start ? " not-filled" : "")} width="80" height="15" />
            <rect class="filled" x="27.5" y="10" width="25" style={"--filled: " + (size * filled) + "px;"} />
            <rect rx="2" class="end" width="80" height="15" y={size - 15} />
            <rect rx="2" class="end-filled" width="80" y={size - 15} style={filled !== 1 ? "opacity: 0;" : "opacity: 1;"} />
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
                <div class="point" style={"top: " + (calcPoint(point.start) - 16) + "px;"}>
                    <TimelinePoint on:goToEntry animateIn={animateIn} bind:expandedPoint={expandedPoint} point={point} timeline={timeline} on:expanded={setExpandedPoint}/>
                </div>
            {/each}
        </div>
        {#if animationDone && expandedPoint && matches}
            <div class="entry-wrapper" transition:fade={{duration: 250}}>
                <DetailedTimelineEntry on:goToEntry linkFullRead={readFullEntries} point={expandedPoint} timeline={timeline} />
            </div>
        {/if}
    </div>
</div>

<style>
    :global(*) {
        --tl-animation-length: 2s;
    }

    .entry-wrapper {
        width: 80%;
        display: flex;
        justify-content: right;
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
        transition: top 0.3s ease-in-out;
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
        position: relative;
    }

    .total, .end {
        fill: rgba(218, 218, 218, 0.2);
    }

    .start {
        fill: var(--main-accent);
    }
    .start.not-filled {
        fill: rgba(218, 218, 218, 0.2);
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
        transition: height 0.5s;
    }
    .end-filled {
        animation: 0.2s fill-end calc(var(--tl-animation-length) - 0.3s);
        animation-fill-mode: forwards;
        transition: opacity 0.4s;
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