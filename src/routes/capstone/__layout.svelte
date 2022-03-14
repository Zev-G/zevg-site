<script>
    import Footer from "../../components/Footer.svelte";
</script>

<svelte:head>
    <link rel="stylesheet" href="../../static/dark.css"/>
</svelte:head>

<div id="layout">
    <slot></slot>
    <footer>
        <Footer />
    </footer>
</div>

<style>
    #layout {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        min-height: 100vh;
    }

    :global(a) {
        color: var(--main-accent);
    }

    :global(*::-webkit-scrollbar) {
        width: 0.5em;
    }

    :global(*::-webkit-scrollbar-thumb) {
        background-color: var(--sub-item-bg);
        border-radius: 2px;
    }
    :global(*::-webkit-scrollbar-thumb:hover) {
        background-color: var(--sub2-item-bg);
    }

    :global(html, body) {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: var(--main-bg);
    }

    :global(body) {
        color: var(--main-text);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    }

    :global(code) {
        background-color: transparent !important;
        font-size: 16px;
    }

    :global(.page-title, .subtitle, .page-title-s) {
        margin-top: 0.1em;
        margin-bottom: 0.2em;
    }

    :global(.page-title) {
        font-size: 80px;
    }
    :global(.page-title-s) {
        font-size: 60px;
    }
    :global(.subtitle) {
        font-size: 35px;
    }
    @media (max-width: 900px) {
        :global(.page-title) {
            font-size: 70px;
        }
        :global(.subtitle) {
            font-size: 28px;
        }
    }
    @media (max-width: 750px) {
        :global(.page-title) {
            font-size: 60px;
        }
        :global(.subtitle) {
            font-size: 20px;
        }
    }
    @media (max-width: 550px) {
        :global(.page-title) {
            font-size: 40px;
        }
        :global(.subtitle) {
            font-size: 20px;
        }
    }

    :global(.subtitle) {
        color: rgb(197, 197, 197);
    }

    :global(.mid-icon) {
        width: 25px;
    }
    :global(.ml-icon) {
        width: 30px;
    }
</style>