<script>
    import DateView from "./DateView.svelte";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let point;
    export let timeline;
    export let index;
    export let expanded = false;
    export let beginExpanded = false;

    let at = timeline.at ? timeline.at : Date.now();
    let end = timeline.end;
    let start = timeline.start;

    let passed = point.start <= at;

    let totalAnimationTime = 2;

    let delay = totalAnimationTime * ((point.start - start) / (Math.min(at, end) - start));

    if (beginExpanded) {
        setTimeout(() => {
            toggleExpanded();
        }, delay * 1000);
    }

    function toggleExpanded() {
        expanded = !expanded;
        dispatch("expanded", {
            expanded,
            point,
            passed,
            index,
            collapse() {
                expanded = false;
            }
        });
    }
    function tryToggleExpand() {
        if (window.matchMedia("(min-width: 1050px)").matches) {
            toggleExpanded();
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
    <div class={"timeline-point " + (expanded ? "expanded" : "")}>
        <svg>
            <path d="M 0 0 l 150 0" />
        </svg>
        <div on:click={tryToggleExpand}>
            <div class="preview">{point.name}</div>
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

        color: white;

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
        stroke: white;
        stroke-width: 6px;
        stroke-dasharray: 16px 8px;
    }

</style>