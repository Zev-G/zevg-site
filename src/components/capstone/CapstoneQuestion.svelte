
<p>
    How do I build <span class="highlighted">good looking</span> websites and applications using <span class="highlighted"> modern technologies</span>?
</p>

<style>
    p {
        color: var(--maint-text);
        font-size: 30px;
        font-family: var(--monospace);
        letter-spacing: 0.1ch;
    }

    .highlighted {
        font-weight: bold;
        background: linear-gradient(to right, var(--main-accent), var(--alt-accent), var(--main-accent), var(--alt-accent));
        background-size: 400% 400%;
        animation: gradient 5s ease infinite;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    @media (max-width: 500px) {
        p {
            font-size: 20px;
        }

        .highlighted {
            background-size: 100% 8px;
        }
    }

</style>