<script>
    import Footer from "../../components/Footer.svelte";
</script>

<svelte:head>
    <link rel="stylesheet" href="/dark.css"/>
    <link rel="stylesheet" href="/global.css"/>
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
</style>