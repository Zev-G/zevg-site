<script>
    import ThemeSwitcher from "../components/ThemeSwitcher.svelte";
    import Footer from "../components/Footer.svelte";

    import { writable } from "svelte/store"
    import { browser } from "$app/env"
    import { page } from '$app/stores'

    export const theme = writable(browser && localStorage.getItem("theme") || "cool-breeze")
    theme.subscribe((val) => {
        if (browser) return (localStorage.theme = val)
    })

    const themes = [
        "cool-breeze", "crimson", "forest"
    ]
    if (themes.indexOf($theme) == -1) {
        $theme = "cool-breeze";
    }
    function nextTheme() {
        $theme = themes[(themes.indexOf($theme) + 1) % themes.length];
        window.localStorage.setItem("theme", $theme);
    }
</script>

<svelte:head>
    <link rel="stylesheet" href={`/${$theme}.css`}/>
    <link rel="stylesheet" href="/global.css"/>
</svelte:head>

{#if !$page.url.pathname.startsWith('/capstone/present')}
    <div id="layout">
        <ThemeSwitcher on:click={nextTheme}/>
        <slot></slot>
        <footer>
            <Footer />
        </footer>
    </div>
{:else}
  <div id="layout">
    <slot />
  </div>
{/if}


<style>
    #layout {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        min-height: 100vh;
    }
</style>