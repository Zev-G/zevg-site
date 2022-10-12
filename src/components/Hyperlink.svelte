<script>
    export let value;
</script>

<a href={value.URL}>
    <slot>
        {value.view}
    </slot>
</a>

<style>
    a {
        color: var(--main-accent);
    }
</style>