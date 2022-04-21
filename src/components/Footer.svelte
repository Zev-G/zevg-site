<script>
    import { onMount } from "svelte";

    // Media Query
    let query = "(min-width: 550px)";
    let mql;
    let mqlListener;
    let wasMounted;
    let matches = true;

    $: console.log(matches);

    onMount(() => {
        wasMounted = true;
        return () => {
            removeActiveListener();
        };
    });

    $: {
        if (wasMounted) {
            removeActiveListener();
            addNewListener();
        }
    }

    function addNewListener() {
        mql = window.matchMedia(query);
        mqlListener = (result) => matches = result.matches;
        mql.addEventListener("change", mqlListener);
        matches = mql.matches;
    }
    function removeActiveListener() {
        if (mql && mqlListener) {
            mql.removeEventListener("change", mqlListener);
        }
    }
</script>

{#if matches}
    <div id="footer">
        <p>{new Date(Date.now()).toDateString()}</p>
        <span class="divide">/</span>
        <p>Zev Godfrey</p>
        <span class="divide">/</span>
        <a href="https://www.github.com/Zev-G">Github</a>
        <span class="divide">/</span>
        <a href="/capstone">Capstone Homepage</a>
        <span class="divide">/</span>
        <a href="/projects">Projects</a>
        <span class="divide">/</span>
        <a href="/capstone/timeline/0">Timeline</a>
    </div>
{/if}
    
<style>
    #footer {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: clamp(5px, 0.8vw, 12px);
        height: 100px;
        background-color: var(--drop-shadow-color);
    }

    a {
        color: var(--main-accent);
    }

    p {
        color: var(--alt-text);
    }

    a, p {
        font-size: clamp(12px, 1.2vw, 20px);
        font-family: var(--monospace);
    }

    .divide {
        font-family: var(--monospace);
        font-size: clamp(14px, 1.5vw, 35px);;
        color: var(--alt3-bg);
    }
</style>