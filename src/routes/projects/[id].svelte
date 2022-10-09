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
                <p>
                    My chess game for web... Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a totam minima, eligendi repudiandae cupiditate alias doloribus mollitia. Corrupti voluptatum eveniet temporibus molestiae magnam doloribus soluta earum voluptate adipisci qui.
                </p>
                <p>
                    Anim voluptate aute culpa occaecat do cillum aute laborum ea labore. Occaecat Lorem irure voluptate sit proident elit. Amet in et mollit irure nulla velit amet incididunt ipsum magna eiusmod reprehenderit laboris ullamco.
                    Do excepteur quis non commodo duis elit nostrud. Laboris esse aliquip nostrud mollit labore dolor aute irure in cupidatat nisi pariatur amet eu. Exercitation ullamco veniam ipsum labore culpa aute culpa anim quis culpa Lorem et ex nisi. Sunt elit dolore occaecat eiusmod. Aliqua ullamco nisi voluptate aliqua aliqua et eu sint velit. Aute mollit ipsum sint id proident aliquip amet et cupidatat qui ea elit velit.
                </p>
                <p>
                    Deserunt laboris ullamco sint commodo duis magna sunt cupidatat officia velit aliqua. In sit minim consequat nostrud fugiat voluptate qui sunt deserunt. Ullamco eiusmod irure Lorem dolore consequat adipisicing nostrud. Culpa id commodo commodo ut ea proident ut ipsum aliqua duis. Non deserunt culpa reprehenderit consectetur consequat fugiat ad non. Labore Lorem laborum laboris esse nisi in culpa laboris ullamco in deserunt.
                </p>
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