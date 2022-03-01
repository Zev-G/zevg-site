
<script>
    let expanded = true;
</script>

<div class="setion">
    <div class={"header " + (expanded ? "expanded" : "")} on:click={() => expanded = !expanded}>
        <slot name="header"></slot>
        <span>></span>
    </div>
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

    span {
        font-size: 30px;
        font-weight: bold;
    }

    .section {
        filter: drop-shadow(0 0 8px var(--drop-shadow-color));
    }

    .content {
        padding: 0 1em;
        font-size: 22px;
        color: var(--alt-text);
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        cursor: pointer;
        font-size: 20px;

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

    @media(max-width: 900px) {
        span {
            font-size: 20px;
        }

        .content {
            font-size: 18px;
        }

        .header {
            font-size: 14px;
        }
    }

    @media(max-width: 750px) {
        span {
            font-size: 15px;
        }

        .content {
            font-size: 16px;
        }

        .header {
            font-size: 12px;
        }
    }
</style>