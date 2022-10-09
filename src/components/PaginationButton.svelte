<script>
    import IoIosArrowForward from 'svelte-icons/io/IoIosArrowForward.svelte'
    import IoIosArrowBack from 'svelte-icons/io/IoIosArrowBack.svelte'
    
    export let name;
    export let dir = "forward";
</script>

<button class="simple" on:click>
    <div class="mid-icon">
        {#if dir == "backward"}
            <IoIosArrowBack/>
        {/if}
    </div>
    <span>
        {name}
    </span>
    <div class="mid-icon">
        {#if dir == "forward"}
            <IoIosArrowForward/>
        {/if}
    </div>
</button>

<style>
    button {
        display: flex;
        gap: 2em;
        font-size: 1.1em;
        padding: 0.5em 0.5em 0.4em 0.5em;

        color: var(--alt2-text);
        opacity: 0.9;

        border-color: var(--item-bg);
        border-width: 1px;
        border-style: solid;
        border-radius: 0.25em;
        
        cursor: pointer;

        align-items: top;

        transition: border-color 0.2s, color 0.2s, transform 0.2s;
    }

    button:hover {
        border-color: var(--main-accent);
        color: var(--main-text);
        transform: translate(0px, -5px);
    }

    span {
        margin: 0;
    }
</style>