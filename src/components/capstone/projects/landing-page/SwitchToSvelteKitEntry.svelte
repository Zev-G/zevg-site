<script>
    import { css, plaintext } from "svelte-highlight/src/languages";
    import Code from "../../../../components/Code.svelte";

    export let entry;


</script>

<div>
    <p>{entry.explanation}</p>
    <p>
        To switch to SvelteKit I need to set up a new SvelteKit project. This is pretty easy, I can just use a few command line commands.
    </p>
    <Code code={
`npm init svelte@next zevg-site
cd zevg-site
npm install
npm run dev -- --open`
    } language={plaintext} fileName="command line" />
    <p>
        SvelteKit (like Svelte) is very well designed so setting up the routing is pretty straightforard after reading the <a href="https://kit.svelte.dev/docs/introduction">SvelteKit docs</a>. 
    </p>
    <p>Switching to SvelteKit means that I can no longer use Firebase for hosting. After looking at my options I'm deciding to switch to Vercel for hosting. This also fixes the really long loading time for the site.</p>
    <p>Lots of code needs to be refactored to properly make this switch. All my components need to be moved into their own folder, and pages need to be designed separately. One of the toughest parts of this is losing a global CSS file to put common styles in.</p>
    <p>To keep the global CSS functionaliy I can add global selectors to my layout component. Here's what this switch looks like:</p>
    <Code language={css} fileName="global.css" code={
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