<script>
    export let qna;

    let showing = false;

    function toggle() {
        showing = !showing;
    }
</script>

<div class="qna">
    <div class="qna-header" on:click={toggle}>
        <div class="expand-collapse">
            {#if showing}
                -
            {:else}
                +
            {/if}
        </div>
        <div class="question">
            <svelte:component this={qna.question.component} value={qna.question.text}/>
        </div>
    </div>
    {#if showing}
         <div class="answer">
            <svelte:component this={qna.answer.component} value={qna.answer.text}/>
         </div>
    {/if}
</div>

<style>
    .qna {
        display: flex;
        flex-direction: column;
        text-align: left;

        background-color: var(--sub-item-bg);
        border-radius: 20px;

        filter: drop-shadow(8px 8px 10px var(--drop-shadow-color));
        transition: all ease-in-out 0.2s;
    }

    .qna-header {
        display: flex;
        flex-basis: 100%;
        gap: 1vw;

        background-color: var(--item-bg);
        border-radius: 20px;

        filter: drop-shadow(0px 2px 4px var(--drop-shadow-color));

        color: var(--main-text);
        cursor: pointer;
        padding: 0.5em 1em;
    }

    .question, .answer {
        font-size: 20px;
    }

    .question {
        font-weight: 500;
    }

    .answer {
        display: flex;
        padding: 1em 3em;
        color: var(--alt-text);
    }

    .qna:hover {
        transform: translateY(-5px);
    }
</style>