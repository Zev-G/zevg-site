<script>
    import ProgressEmoji from "./ProgressEmoji.svelte";
    export let timelines;

    export let selected;
</script>

<div class="timelines">
    <div class="tl-selectors">
        {#if timelines}
            {#each timelines as timeline}
            <button class={"tl-selector simple" + (selected === timeline ? " selected" : "")} on:click={() => selected = timeline} tabindex="0">
                {timeline.name}
                {#if timeline.start <= Date.now()}
                    <ProgressEmoji progress={timeline.progress}/>
                {/if}
            </button>
            {/each}
        {/if}
    </div>
</div>


<style>

    .tl-selectors {
        display: flex;
        filter: drop-shadow(0 0 2px var(--drop-shadow-color));
    }
    .tl-selector {
        font-size: clamp(10px, 2vw, 16px);
        text-align: center;
        color: var(--main-color);
        padding: 0.2em 1em;
        background-color: var(--alt2-bg);
        border: var(--item-bg) solid 1px;
        cursor: pointer;
    }
    .tl-selector:hover {
        background-color: var(--alt3-bg);
    }

    .tl-selector.selected {
        background-color: var(--sub-item-bg);
    }

    .tl-selector :global(.icon) {
        margin-left: 0.5em;
    }
</style>