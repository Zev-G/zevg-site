<script>
    import Card from "../../components/Card.svelte";
    import data from '../../components/projects/data.json';
    import SeeMore from "../../components/SeeMore.svelte";
    import GoMarkGithub from 'svelte-icons/go/GoMarkGithub.svelte'

</script>

<main>
    <div id="heading">
        <h1 class="page-title">Programming Portfolio</h1>
        <h2 class="subtitle">Zev Godfrey</h2>
    </div>
    <hr>
    <div class="cards-wrapper">
        <div id="cards">
            {#each data as card}
                <Card imgSrc={card.image ? card.image : ""} href={card.links ? card.links[0].url : ""}>
                    <h1 slot="heading">{card.name}</h1>
                    <div slot="content" class="content">
                        <p>{card.summary}</p>
                        {#if card.links}
                            <div class="links">
                                {#each card.links as link}
                                    {#if link.url}
                                        <SeeMore href={link.url}>
                                            <div class="link">
                                                {#if link.icon}
                                                    {#if link.icon == "github"}
                                                        <div class="mid-icon">
                                                            <GoMarkGithub/>
                                                        </div>
                                                    {/if}
                                                {/if}
                                                {#if link.name}
                                                    {link.name} >
                                                {/if}
                                            </div>
                                            
                                        </SeeMore>
                                    {/if}
                                {/each}
                            </div>
                        {/if}
                    </div>
                </Card>
            {/each}
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

    .link {
        display: flex;
        gap: 0.5em;
    }

    .links {
        display: flex;
        flex-wrap: wrap;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .mid-icon {
        width: 28px;
        height: 28px;
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
        margin: 1.5rem max(10px, 4vw) max(10px, 4vw) max(10px, 4vw);
    }

    @media(min-width: 1600px) {
        #cards {
            margin: 1.5rem 6vw 6vw 6vw;
        }
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