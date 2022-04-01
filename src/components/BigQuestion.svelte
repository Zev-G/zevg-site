<script>
    export let question;
</script>

<div class="big-question">
    <h1>{question}</h1>
    <slot/>
</div>

<style>

    .big-question {
        text-align: center;
        color: var(--main-text);
    }

    h1 {
        margin-top: 0;
        font-size: 66px;
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 40px;
        }
    }

</style>