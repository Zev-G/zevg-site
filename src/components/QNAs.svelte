<script>
    import QNA from "./QNA.svelte";

    export let qnas;
</script>

<div class="qnas">
    {#each qnas as qna}
        <QNA qna={qna}/>
    {/each}
</div>

<style>
    .qnas {
        margin: 8vh 4vh 4vh 4vh;
        display: flex;
        flex-direction: column;
        gap: 2.5vh;
    }
</style>