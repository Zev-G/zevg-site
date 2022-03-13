<script>
    import { Highlight } from "svelte-highlight";
    import { githubDark } from "svelte-highlight/src/styles";

    export let language;
    export let code;
</script>

<svelte:head>
    {@html githubDark}
</svelte:head>

<div>
    <Highlight {language} {code} />
</div>

<style>
    div {
        background-color: var(--alt2-bg);
        border-radius: 10px;
    }
</style>