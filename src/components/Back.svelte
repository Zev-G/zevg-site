<script>
    export let href;
</script>


<a href={href}>
    <div class="link-container">
        <div class="inner">
            <slot></slot>
        </div>
    </div>
</a>
<style>
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
    }
    .link-container:hover::before {
        opacity: 1;
    }
    .inner {
        background-color: var(--main-bg);
        color: var(--alt-text);
        font-family: monospace;
        font-size: 18px;
        border-radius: 0.2em;
        padding: 0.2em 1em 0.4em 1em;
    }
    a {
        text-decoration: none;
    }
</style>