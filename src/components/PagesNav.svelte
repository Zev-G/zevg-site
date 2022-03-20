<script>
    import FaListUl from 'svelte-icons/fa/FaListUl.svelte';
    import { fade } from 'svelte/transition';
    import clickOutside from './click_outside';

    export let showing = false;
</script>

<div class={"pages-nav " + (showing ? "content-visible" : "")} use:clickOutside on:outclick={() => showing = false}>
    <button class="simple" on:click={() => showing = !showing} tabindex="0">
        <div class="ml-icon">
            <FaListUl />
        </div>
    </button>
    {#if showing}
        <div class="dropdown-content" transition:fade={{ duration: 70 }}>
            <slot></slot>
        </div>
    {/if}
</div>

<style>

    .dropdown-content {
        display: block;
        position: absolute;
        z-index: 1;
        font-size: 18px;
        margin-top: 0.25em;
        border-radius: 10px;
        filter: drop-shadow(0 0 8px var(--drop-shadow-color));
    }

    .dropdown-content {
        background-color: var(--alt3-bg);
        padding: 1em;
    }

    .ml-icon {
        padding: 8px 11px 5px 10px;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color 0.1s ease-in-out;
    }

    .ml-icon:hover {
        background-color: var(--alt2-bg);
    }

    .content-visible .ml-icon {
        background-color: var(--alt2-bg);
    }

    .ml-icon > :global(svg) {
        fill: var(--between-color);
    }
</style>