<script>
    import { Highlight, HighlightSvelte } from "svelte-highlight";
    import { githubDark } from "svelte-highlight/src/styles";

    export let language;
    export let code;
    export let fileName = null;
</script>

<svelte:head>
    {@html githubDark}
</svelte:head>

<div class={fileName ? "showing-header" : ""}>
    {#if fileName}
        <div class="header">
            <h2>{fileName}</h2>
            <hr>
        </div>
    {/if}
    {#if language === "svelte"}
        <HighlightSvelte {code} />
    {:else}
    <Highlight {language} {code} />
    {/if}
</div>

<style>
    div {
        background-color: var(--alt2-bg);
        border-radius: 10px;
    }
    h2 {
        padding: 0.5em;
        margin: 0;
        font-size: 1.15em;
        font-family: monospace;
    }
    hr {
        margin: 0;
        border: 2px solid var(--sub2-item-bg);
    }

    .header {
        filter: drop-shadow(0 4px 2px var(--drop-shadow-color));
        background-color: var(--alt3-bg);
    }

    .showing-header > :global(pre) {
        margin-top: 0;
    }
</style>