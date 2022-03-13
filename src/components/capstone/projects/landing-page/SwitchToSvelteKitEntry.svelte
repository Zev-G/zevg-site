<script>
    import { css } from "svelte-highlight/src/languages";
    import Code from "../../../../components/Code.svelte";

    export let entry;


</script>

<div>
    <p>{entry.explanation}</p>
    <p>Switching to SvelteKit also meant that I could no longer use Firebase for hosting. After looking at my options I decided to switch to Vercel for hosting. This also fixed the really long loading time for the website.</p>
    <p>Lots of code needed to be refactored to properly make the switch. All my components needed to be moved into their own folder, and pages needed to be designed separately. One of the toughest parts of the switch was losing a global CSS file to put common styles in.</p>
    <p>To keep the global CSS functionaliy I added global selectors to my layout component. Here's what this switch looked like:</p>
    <strong>global.css</strong>
    <Code language={css} code={
`body {
    color: var(--main-text);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

* {
    --main-bg: #111116;
    --alt-bg: #191920;
    --alt2-bg: rgb(31, 31, 39);
    --alt3-bg: rgb(35, 35, 44);

    --light-tint: rgba(69, 72, 85, 0.05);
    --main-accent-tint: rgba(103, 145, 253, 0.3);
    --alt-accent-tint: rgba(180, 103, 253, 0.3);

    ...
}`
    }/>
    <strong>To:</strong>
    <Code language={css} code={
`:global(body) {
    color: var(--main-text);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

:global(*) {
    --main-bg: #111116;
    --alt-bg: #191920;
    --alt2-bg: rgb(31, 31, 39);
    --alt3-bg: rgb(35, 35, 44);

    --light-tint: rgba(69, 72, 85, 0.05);
    --main-accent-tint: rgba(103, 145, 253, 0.3);
    --alt-accent-tint: rgba(180, 103, 253, 0.3);

    ...
}`
    } />
</div>