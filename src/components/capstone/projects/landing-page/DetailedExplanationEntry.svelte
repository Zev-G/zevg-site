<script>
    import Code from "../../../Code.svelte";

    export let entry;
</script>

<div>
    <p>{entry.explanation}</p>
    <p>Most of the work that needs to be done for the explanations is just writing them, but I want to allow for code to be injected into the explanations. To do this I will use a <a href="https://github.com/metonym/svelte-highlight">Svelte port</a> for <a href="https://highlightjs.org/">highlight.js</a>.</p>
    <Code language="svelte" fileName="Code.svelte" code={
`<script>
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

...`
    } />
</div>