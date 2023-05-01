<script>
    import Card from "../../components/Card.svelte";
    import data from '../../components/projects/data.json';
    import SeeMore from "../../components/SeeMore.svelte";
    import ImageSlides from "../../components/ImageSlides.svelte";
    import GoMarkGithub from 'svelte-icons/go/GoMarkGithub.svelte'

</script>

<main>
    <div id="heading">
        <h1 class="page-title">Programming Portfolio</h1>
        <h2 class="subtitle">Zev Godfrey</h2>
    </div>
    <hr>
    <!-- TODO remove after I graduate -->
    <!-- <div class="about-me">
        <h2>Thank you for visiting my portfolio.</h2>
        <p>I'm a 16 year old developer living in Victoria BC. I've been programming primarily in Java since early 2020 but I also have smaller projects in a variety of languages and frameworks. Lately I've been learning web technologies while developing my website and working on my Capstone Project for school.</p>
        <p>
            In addition to programming and studying for school my favorite activites include: spending time with friends, going for long solo walks, working with kids, and these past few months I've taken up piano and long distance running.
        </p>
    </div> -->
    <div class="current-project">
        <h1 style:grid-area="title">Current Project: A Notetaking App</h1>
        <div style:grid-area="description">
            <p>
                Everyday I use my touchscreen Windows laptop with a stylus to do my homework and take notes. After trying several note taking applications and researching dozens I came to the conclusion that what I was looking for didn't quite exist. So, being a developer and a student who had just started winter break I decided to make my own.  
            </p>
            <p>
                So far, the application has a sophisticated file-management system that hooks directly into files on your computer, its own file format, support for importing PDFs, and a nice note-taking interface. Many features are on their way and the program is now at a point where I feel comfortable using it to do my homework.
            </p>
        </div>
        <img style:grid-area="image" class="project-img" src="inkaev.png" alt="">
    </div>
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

    .current-project {
        display: grid;
        grid-template-areas: 
            "title title title title title"
            "description description image image image";
        gap: 5%;
        justify-items: start;
        text-align: left;
        padding: 2% 2% 4% 2%;
        margin: 2% 5%;
        background-color: var(--item-bg);
        border-radius: 0.5rem;
    }

    .project-img {
        width: 100%;
        border-radius: 0.2rem;
    }

    @media(max-width: 1000px) {
        .current-project {
            grid-template-areas: 
            "title"
            "description"
            "image";
            justify-items: center;
        }

        .project-img {
            display: grid;
            justify-items: center;
            padding: 0 0 8% 0;
        }
    }

    /* .about-me {
        text-align: center;
        margin-left: 10vw;
        margin-right: 10vw;
        font-size: 1.2em;
    } */

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