<script>
    import FaPaintRoller from 'svelte-icons/fa/FaPaintRoller.svelte'
</script>

<button on:click>
    <FaPaintRoller/>
</button>

<style>
    button {
        position: absolute;
        top: 0;
        right: 0;
        width: 25px;
        padding: 0;
        margin: 0.5rem;
        color: var(--alt-text);
        background-color: var(--main-bg);
        border-color: transparent;
        cursor: pointer;

        transition: color 0.2s;
    }

    button:hover {
        color: var(--alt-accent)
    }
</style>