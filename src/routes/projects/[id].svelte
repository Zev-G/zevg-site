<script context="module">
    export async function load({params, props}) {
        return {
            props: {
                id: params.id
            }
        };
    }
</script>

<script>
    import PaginationButton from "../../components/PaginationButton.svelte";
    import SectionSelector from "../../components/SectionSelector.svelte";

    export let id;
    export let title = "Chess (Web)";
    const sections = [ "Overview", "Creation", "Technical Aspects", "Links" ];
    let selectedSection = "Overview";
    $: index = sections.indexOf(selectedSection);
</script>

<svelte:head>
  <title>{title} - {selectedSection}</title>
</svelte:head>

<div class="project-details">
    <div>
        <h1 class="page-title-s">
            {title}
            <span style:color="var(--sub-item-bg)">/</span>
            <span style:color="var(--alt2-text)">{selectedSection}</span>
        </h1>
        <div class="selection-selector">
            <SectionSelector bind:selected={selectedSection} sections={sections} />
        </div>
        <div class="content-wrapper">
            <div class="content">
                
            </div>
        </div>
    </div>

    <div class="nav">
        <div class="backward">
            {#if index != 0}
                <PaginationButton name={sections[index - 1]} dir="backward" on:click={() => selectedSection = sections[index - 1]}/>
            {/if}
        </div>
        <div class="forward">
            {#if index != sections.length - 1}
                <PaginationButton name={sections[index + 1]} on:click={() => selectedSection = sections[index + 1]}/>
            {/if}
        </div>
    </div>
</div>

<style>
    .project-details {
        margin-left: 1vw;
        margin-right: 1vw;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        /* Total View Height - Footer Height, kinda a hack */
        min-height: calc(100vh - 100px);
    }

    .page-title-s {
        margin-bottom: 1vh;
    }

    .selection-selector {
        margin-left: 1vw;
        margin-bottom: 3vh;
    }

    .content-wrapper {
        display: flex;
        justify-content: center;
    }
    .content {
        margin-left: 2vw;
        font-size: 1.4em;
        color: var(--alt-text);
        line-height: 1.6em;
        max-width: max(min(100vw, 700px), 60vw);
    }

    .nav {
        margin-bottom: 1em;
        display: flex;
        justify-content: space-between;
    }

    p {
        margin-bottom: 2em;
    }
</style>