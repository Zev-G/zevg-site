<script>
    import HomePage from "./HomePage.svelte";
</script>

<HomePage />

<style>
    :global(*) {
        --main-bg: #111116;
        --item-bg: #25262E;
        --sub-item-bg: #30323d;
        --sub2-item-bg:rgb(69, 72, 85);
        --drop-shadow-color: rgba(0, 0, 0, 0.25);;
        --main-accent: #6791FD;
        --alt-accent: #b467fd;
    }

    :global(body::-webkit-scrollbar) {
        width: 0.5em;
    }

    :global(body::-webkit-scrollbar-thumb) {
        background-color: var(--sub-item-bg);
        border-radius: 2px;
    }
    :global(body::-webkit-scrollbar-thumb:hover) {
        background-color: var(--sub2-item-bg);
    }

    :global(html, body) {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: var(--main-bg);
    }

    :global(body) {
        color: #333;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    }
</style>