<script>
    import { css } from "svelte-highlight/src/languages";
    import Code from "../../../../components/Code.svelte";

    export let entry;
    let code = 
`:global(*) {
    --main-bg: #111116;
    --alt-bg: #191920;
    --alt2-bg: rgb(31, 31, 39);
    --alt3-bg: rgb(35, 35, 44);

    --light-tint: rgba(69, 72, 85, 0.05);
    --main-accent-tint: rgba(103, 145, 253, 0.3);
    --alt-accent-tint: rgba(180, 103, 253, 0.3);

    --alt-text: rgb(233, 233, 233);
    --main-text: white;

    --between-color: rgb(139, 148, 158);

    --item-bg: #25262E;
    --sub-item-bg: #30323d;
    --sub2-item-bg: rgb(69, 72, 85);

    --drop-shadow-color: rgba(0, 0, 0, 0.25);

    --main-accent: #6791FD;
    --alt-accent: #b467fd;
}`
    ;
</script>

<div>
    <p>{entry.explanation}</p>
    <p>This version of the landing page is still being updated, but remains quite similiar to the current version, found <a href="/capstone">here</a>.</p>
    <p>To make styling the project easier I began using global CSS variables. This requires a bit of a hack to accomplish in Svelte. With SvelteKit I add a global selector to my layout component's CSS which sets the variables.</p>
    <Code language={css} {code} />
</div>