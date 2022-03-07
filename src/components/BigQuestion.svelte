<script>
    export let question;
    export let answerComponent;
    export let answer;
</script>

<div class="big-question">
    <h1>{question}</h1>
    <svelte:component this={answerComponent} answer={answer} />
</div>

<style>

    .big-question {
        text-align: center;
        color: white;
        margin-top: 10vh;
    }

    h1 {
        font-size: 66px;
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 40px;
        }
    }

</style>