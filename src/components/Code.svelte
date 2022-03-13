<script>
    import { Highlight } from "svelte-highlight";
    import { githubDark } from "svelte-highlight/src/styles";

    export let language;
    export let code;
</script>

<svelte:head>
    {@html githubDark}
</svelte:head>

<Highlight {language} {code} />