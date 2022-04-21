<script>
    import FaCheck from 'svelte-icons/fa/FaCheck.svelte';
    import GoKebabHorizontal from 'svelte-icons/go/GoKebabHorizontal.svelte'
    import GoX from 'svelte-icons/go/GoX.svelte'

    export let progress;
</script>

{#if progress === "none"}
    <span class="none icon" title="Not started"><GoX/></span>
{:else if progress === "done"}
    <span class="done icon" title="Completed"><FaCheck/></span>
{:else if progress === "started"}
    <span class="started icon" title="Started"><GoKebabHorizontal/></span>
{/if}

<style>
    .icon :global(svg) {
        width: 1em;
        opacity: 0.75;
        vertical-align: bottom;
    }

    .started {
        color: orange;
    }

    .none {
        color: rgb(190, 16, 16);
    }

    .done {
        color: rgb(7, 168, 7);
    }
</style>