<script>

</script>

<div id="footer">
    <p>{new Date(Date.now()).toDateString()}</p>
    <span class="divide">/</span>
    <p>Zev Godfrey</p>
    <span class="divide">/</span>
    <div class="socials">
        <a href="https://www.github.com/Zev-G">Github</a>
    </div>
</div>

<style>
    #footer {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        height: 100px;
        background-color: var(--drop-shadow-color);
    }

    .socials {
        display: flex;
    }

    a {
        color: var(--main-accent);
    }

    p {
        color: lightgray;
    }

    a, p {
        font-size: 18px;
        font-family: monospace;
    }

    .divide {
        font-family: monospace;
        font-size: 30px;
        color: rgba(255, 255, 255, 0.1);
    }
</style>