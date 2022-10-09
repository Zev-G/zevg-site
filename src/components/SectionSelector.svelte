<script>
    export let sections;
    export let selected;
</script>

<div class="section-selector">
    {#each sections as section}
        <button class={"simple" + (section == selected ? " selected" : "")} on:click={() => selected = section}>
            <span>{section}</span>
        </button>
    {/each}
</div>

<style>
    .section-selector {
        display: flex;
        font-size: 1.3em;
        gap: 1.25em;
    }

    button {
        font-size: 1em;
        color: var(--alt-text);
        background: none;
        cursor: pointer;

        border-style: solid;
        border-top: none;
        border-left: none;
        border-right: none;
        border-color: var(--main-accent-tint);
        border-width: 0.25em;
        border-radius: 10%;

        transition: border-color 0.2s;
        opacity: 1;
    }

    button.selected {
        border-color: var(--main-accent);
        color: var(--main-text);
    }

    button:active {
        border-color: var(--main-accent-tint);
    }
</style>