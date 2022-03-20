<script>
    export let href = null;
</script>

<div class="see-more">
    {#if href}
        <a href={href} on:click tabindex="0">
            <div class="link-container">
                <div class="inner">
                    <span><slot></slot></span>
                </div>
            </div>
        </a>
    {:else}
        <button class="simple" on:click tabindex="0">
            <div class="link-container">
                <div class="inner">
                    <span><slot></slot></span>
                </div>
            </div>
        </button>
    {/if}
</div>


<style>
    a {
        text-decoration: none;
    }

    span {
        font-family: var(--monospace);
        font-weight: bold;
        color: var(--alt-text);
    }

    .see-more {
        display: flex;
        justify-content: center;

        font-size: 24px;
    }

    .link-container {
        padding: 2px;
        border-radius: 0.2em;

        filter: drop-shadow(0 0 8px var(--drop-shadow-color));
        cursor: pointer;

        background-color: var(--sub-item-bg);
        z-index: 1;
    }
    .link-container::before {
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(to bottom right, var(--main-accent), var(--alt-accent));
        border-radius: 0.2em;
        z-index: -1;
        transition: opacity 0.25s linear;
        opacity: 0;
        visibility: hidden;
    }
    .link-container:hover::before {
        visibility: visible;
        opacity: 1;
    }
    @media (pointer: coarse) {
        .link-container::before {
            position: inherit;
            content: "";
            background: none;
            visibility: hidden;
        }
        .link-container:hover::before {
            visibility: hidden;
            opacity: 0;
        }
    }
    .inner {
        background-color: var(--main-bg);
        border-radius: 0.2em;
        padding: 0.2em 1em 0.4em 1em;
    }

</style>