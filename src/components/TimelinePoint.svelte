<script>
    import DateView from "./DateView.svelte";
    import { createEventDispatcher, onMount } from 'svelte';
    import ProgressEmoji from "./ProgressEmoji.svelte";

    const dispatch = createEventDispatcher();

    export let point;
    export let timeline;
    export let animateIn = true;
    export let expandedPoint;

    $: expanded = expandedPoint === point;

    $: at = timeline.at ? timeline.at : Date.now();
    $: end = timeline.end;
    $: start = timeline.start;

    $: passed = point.start <= at;

    let totalAnimationTime = 2;

    $: delay = animateIn ? totalAnimationTime * ((point.start - start) / (Math.min(at, end) - start)) : 0;

    let animating = animateIn;
    if (animating) {
        onMount(() => {
            setTimeout(() => animating = false, delay * 1000 / 1.5);
        });
    }

    function sendExpandedEvent() {
        if (point !== expandedPoint || !expanded) {
            dispatch("expanded", {
                expanded,
                point
            });
        }
    }

    function tryToggleExpand() {
        if (window.matchMedia("(min-width: 1050px)").matches) {
            expanded = !expanded;
            sendExpandedEvent();
        } else {
            dispatch(
                "goToEntry",
                { point }
            );
        }
    }
</script>

<div 
    class={(passed ? "at" : "not-at") + " timeline-point-top"}
    style={"--delay: " + delay + "s;"}
>
    <div class="date">
        <DateView showYear={false} date={point.start} />
    </div>
    <div class={"timeline-point " + ((expanded && !animating) ? "expanded" : "")}>
        <svg>
            <path d="M 0 0 l 150 0" />
        </svg>
        <div>
            <button on:click={tryToggleExpand} tabindex="0" class="preview simple">
                {point.name}
                {#if passed}
                    <ProgressEmoji progress={point.progress}/>
                {/if}
            </button>
        </div>
    </div>
</div>


<style>
    .not-at {
        opacity: 0.25;
    }

    .at {
        opacity: 0.25;
        animation: 0.2s load var(--delay) ease-in-out;
        animation-fill-mode: forwards;
    }

    @keyframes load {
        from {
            opacity: 0.25;
        }
        to {
            opacity: 1;
        }
    }

    .timeline-point {
        display: flex;
        align-items: center;
    }

    .preview {
        cursor: pointer;
    }

    .preview:hover {
        text-decoration: underline;
    }

    @media (min-width: 1050px) {
        .expanded > div > .preview {
            transform: scale(1.1) translateX(25px);
        }
    }

    .date {
        position: absolute;
    }

    .preview {
        text-align: center;
        font-family: var(--monospace);
        font-style: normal;
        font-weight: 500;
        font-size: clamp(13px, 3vw, 20px);

        color: var(--main-text);

        margin: 0 10px;
        padding: 0.75em 1.2em;
        background-color: var(--item-bg);
        border-radius: 0.5em;
        border-width: 1px;
        border-style: solid;
        border-color: var(--alt2-bg);
        box-shadow: 0px 4px 4px var(--drop-shadow-color);
        
        transition: transform 0.2s;
    }

    @media (max-width: 600px) {
        .preview {
            padding: 0.7em 1em;
        }

        svg {
            width: 100px;
        }

        :global(.date > .date-view) {
            font-size: 15px;
        }
    }

    svg {
        max-width: 150px;
        min-width: 50px;
        height: 3px;
        transition: width 0.5s;
    }

    path {
        fill: none;
        stroke: var(--main-text);
        stroke-width: 6px;
        stroke-dasharray: 16px 8px;
    }

</style>