<script>
    import Card from "../../components/Card.svelte";
</script>

<main>
    <div id="heading">
        <h1 class="page-title">My Projects</h1>
        <h2 class="subtitle">Zev Godfrey</h2>
    </div>
    <hr>
    <div class="cards-wrapper">
        <div id="cards">
            <Card imgSrc="/chess.png">
                <h1 slot="heading">Chess</h1>
                <p slot="content">
                    Playable chess game written in Java using JavaFX. Design copied from Chess.com. Includes Minimax opponents.
                </p>
            </Card>
            <Card imgSrc="/ide.png">
                <h1 slot="heading">JavaFX IDE</h1>
                <p slot="content">An IDE written in Java using JavaFX. Features: language support for CSS, and Java; autocomplete; syntax highlighting; and more. </p>
            </Card>
            <Card imgSrc="/lang.png">
                <h1 slot="heading">Language</h1>
                <p slot="content">
                    Programming language written in Java with access to Java's standard library. This language is interpreted and runs very slowly.
                </p>
            </Card>
            <Card imgSrc="/drawing.png">
                <h1 slot="heading">Drawing App</h1>
                <p slot="content">
                    Drawing app with an infinite canvas written in Java using JavaFX. Missing some important features but overall nice to use.
                </p>
            </Card>
            <Card imgSrc="/points.png">
                <h1 slot="heading">Points App</h1>
                <p slot="content">
                    An application made to allow you to play with points and curves. It's pretty easy and fun to use and even lets you animate frames.
                </p>
            </Card>
            <Card imgSrc="/zerades.png">
                <h1 slot="heading">Zerades</h1>
                <p slot="content">
                    My own version of Sherades. Instead a list of prompts every player gets to add "Things" and "Actions", these are combined to create prompts.
                </p>
            </Card>
        </div>
    </div>
</main>

<style>
    #heading {
        margin-bottom: 3vh;
    }

    h1 {
        margin: 0;
    }

    .cards-wrapper {
        display: flex;
        justify-content: center;
    }

    #cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: clamp(5px, 5vw, 100px) clamp(5px, 8vw, 100px);
        margin: 1.5rem clamp(10px, 4vw, 50px) clamp(10px, 4vw, 50px) clamp(10px, 4vw, 50px);
    }

    main {
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: column;
    }

    p {
        overflow: auto;
    }

    hr {
        width: 90%;
        border: none;
        border-top: 5px solid var(--sub-item-bg);
    }
</style>