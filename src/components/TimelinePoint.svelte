<script>
    import DateView from "./DateView.svelte";
    import { createEventDispatcher, onMount } from 'svelte';

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
            console.log("Dispatching " + expanded);
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
        }
    }
</script>

<div 
    class={(passed ? "at" : "not-at") + " timeline-point-top"}
    style={"--delay: " + delay + "s;"}
>
    <div class="date">
        <DateView date={point.start} />
    </div>
    <div class={"timeline-point " + ((expanded && !animating) ? "expanded" : "")}>
        <svg>
            <path d="M 0 0 l 150 0" />
        </svg>
        <div>
            <div on:click={tryToggleExpand} tabindex="0" class="preview">{point.name}</div>
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

    @media (min-width: 1050px) {
        .expanded > div > .preview {
            transform: scale(1.1) translateX(25px);
        }

        .preview {
            cursor: pointer;
        }

        .preview:hover {
            text-decoration: underline;
        }
    }

    .date {
        position: absolute;
    }

    .preview {
        text-align: center;
        font-family: monospace;
        font-style: normal;
        font-weight: 500;
        font-size: 19px;

        color: var(--main-text);

        margin: 0 10px;
        padding: 0.75em 1.2em;
        background-color: var(--item-bg);
        border-radius: 0.5em;
        box-shadow: 0px 4px 4px var(--drop-shadow-color);
        
        transition: transform 0.2s;
    }

    @media (max-width: 600px) {
        .preview {
            font-size: 15px;
            padding: 0.5em 0.75em;
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