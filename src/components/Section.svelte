
<script>
    import IoIosArrowForward from 'svelte-icons/io/IoIosArrowForward.svelte'
    export let expanded = false;
</script>

<div class="setion">
    <button class={"header simple " + (expanded ? "expanded" : "")} on:click={() => expanded = !expanded}>
        <slot name="header"></slot>
        <div class="mid-icon">
            <IoIosArrowForward />
        </div>
    </button>
    {#if expanded}
        <hr>
        <div class="content">
            <slot name="content"></slot>
        </div>
    {/if}
</div>

<style>
    hr {
        border: none;
        border-top: 5px solid var(--sub2-item-bg);
        margin: 0;
    }

    .mid-icon {
        display: flex;
        align-items: center;
        transform: rotate(0deg);
        transition: transform 0.3s ease-in-out;
    }

    .expanded > .mid-icon {
        transform: rotate(90deg);
    }

    .section {
        filter: drop-shadow(0 0 8px var(--drop-shadow-color));
    }

    .content {
        padding: 0 1vw;
        font-size: 20px;
        color: var(--alt-text);
    }

    .header {
        display: flex;
        width: 100%;
        color: var(--main-color);
        justify-content: space-between;
        align-items: center;

        cursor: pointer;
        font-size: 16px;

        padding: 0.5em 1em;
        border-radius: 15px 15px 0 0 ;

        transition: background-color 0.2s;
    }

    .header:hover {
        background-color: var(--alt-bg);
    }

    .header:not(.expanded) {
        border-radius: 15px;
        background-color: var(--alt2-bg);
    }
    .header:hover:not(.expanded) {
        background-color: var(--alt3-bg);
    }

    @media(max-width: 900px) {
        .content {
            font-size: 17px;
        }

        .header {
            font-size: 12px;
        }
    }

    @media(max-width: 750px) {
        .content {
            font-size: 15px;
        }

        .header {
            font-size: 10px;
        }
    }
</style>