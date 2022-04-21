<script>

</script>

<div id="footer">
    <p>{new Date(Date.now()).toDateString()}</p>
    <span class="divide">/</span>
    <p>Zev Godfrey</p>
    <span class="divide">/</span>
    <a href="https://www.github.com/Zev-G">Github</a>
    <span class="divide">/</span>
    <a href="/capstone">Capstone Homepage</a>
    <span class="divide">/</span>
    <a href="/projects">Projects</a>
    <span class="divide">/</span>
    <a href="/capstone/timeline/0">Timeline</a>
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

    a {
        color: var(--main-accent);
    }

    p {
        color: var(--alt-text);
    }

    a, p {
        font-size: 18px;
        font-family: var(--monospace);
    }

    .divide {
        font-family: var(--monospace);
        font-size: 30px;
        color: var(--alt3-bg);
    }

    @media(max-width: 750px) {
        a, p {
            font-size: 14px;
        }
    }

    @media(max-width: 550px) {
        #footer {
            visibility: hidden;
        }
    }
</style>