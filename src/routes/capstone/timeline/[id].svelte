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
    import PagesNav from "../../../components/PagesNav.svelte";
    import { timeline } from "../../../components/capstone/data";

    export let id;

    let showPagesNav = false;
</script>

<div id="content">
    <div id="header">
        <PagesNav bind:showing={showPagesNav}>
            <ul>
                {#each timeline.points as point, i}
                    <li class={i == id ? "selected" : ""}>
                        <a href={`/capstone/timeline/${i}`} on:click={() => showPagesNav = false}>
                            <div class="hyperlink-content">
                                {point.name}
                            </div>
                        </a>
                    </li>
                {/each}
            </ul>
        </PagesNav>
        <h1 class="page-title-s">{timeline.points[id].name}</h1>
    </div>
</div>

<style>
    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }

    li:not(:last-child) {
        margin-bottom: 0.3em;
    }

    .hyperlink-content {
        padding: 0.5em 0.5em 0.5em 1em;
        border-radius: 5px;
        cursor: pointer;
    }

    .hyperlink-content:hover {
        background-color: var(--sub-item-bg);
    }

    li.selected .hyperlink-content {
        background-color: var(--main-accent);
    }

    a {
        color: white;
        text-decoration: none;
    }
    

    #content {
        padding: 1em;
    }

    #header {
        display: flex;
        align-items: center;
        gap: 1em
    }

</style>
