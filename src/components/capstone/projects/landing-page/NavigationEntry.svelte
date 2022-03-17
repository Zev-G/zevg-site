<script>
    import Code from "../../../Code.svelte";

    export let entry;
</script>

<div>
    <p>{entry.explanation}</p>
    <p>
        My inspriation for this feature is Github's README navigation, except this will be for switching the entire page rather than the portion of the README you're on. Github's README:
    </p>
    <img alt="Github README Navigation" src="../../../../github-nav.png">
    <p>
        To make this I'll need to create a new component called PagesNav. It just provides a button which shows a dropdown, the content of the dropdown needs to be designed by each implementaiton.
    </p>
    <Code language="svelte" code={
`<script>
    import FaListUl from 'svelte-icons/fa/FaListUl.svelte';
    import { fade } from 'svelte/transition';
    import clickOutside from './click_outside';

    export let showing = false;
</script>

<div class={"pages-nav " + (showing ? "content-visible" : "")} use:clickOutside on:outclick={() => showing = false}>
    <div class="ml-icon" on:click={() => showing = !showing}>
        <FaListUl />
    </div>
    {#if showing}
        <div class="dropdown-content" transition:fade={{ duration: 70 }}>
            <slot></slot>
        </div>
    {/if}
</div>

...`
    } fileName="PagesNav.svelte" />
</div>

<style>
    img {
        width: 20vw;
    }
</style>