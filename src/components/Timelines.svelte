<script>
    export let timelines;

    export let selected;
</script>

<div class="timelines">
    <div class="tl-selectors">
        {#if timelines}
            {#each timelines as timeline}
            <div class={"tl-selector" + (selected === timeline ? " selected" : "")} on:click={() => selected = timeline} tabindex="0">{timeline.name}</div>
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
</style>