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
        font-size: clamp(40px, 7vw, 70px);
    }

</style>