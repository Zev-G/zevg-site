<script>
    import Footer from "../../components/Footer.svelte";
</script>

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
        height: 100vh;
    }

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

    :global(.page-title, .subtitle) {
        color: white;
        margin-top: 0.1em;
        margin-bottom: 0.2em;
    }

    :global(.page-title) {
        font-size: 100px;
    }
    :global(.subtitle) {
        font-size: 40px;
    }
    @media (max-width: 850px) {
        :global(.page-title) {
            font-size: 80px;
        }
        :global(.subtitle) {
            font-size: 30px;
        }
    }
    @media (max-width: 600px) {
        :global(.page-title) {
            font-size: 60px;
        }
        :global(.subtitle) {
            font-size: 20px;
        }
    }
    @media (max-width: 400px) {
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
</style>