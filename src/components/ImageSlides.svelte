<script>
    export let images;
</script>

<div class="slides">
    {#each images as image, i}
        <div class="slide" id={`slide-${i}`}>
            <img src={image.URL} alt={image.description}>
        </div>
    {/each}
</div>
<div class="slide-navigator">
    {#each images as image, i}
        <a href={`#slide-${i}`} onclick="return false;">{i + 1}</a>
    {/each}
</div>

<style>
    img {
        width: 90%;
        border-radius: 0.2rem;
    }

    .slide-navigator {
        display: flex;
        width: 90%;
        justify-content: center;
        gap: 1rem;
    }

    a {
        color: var(--main-bg);
        text-decoration: none;
        background-color: var(--alt-text);
        padding: 0.4rem;
        border-radius: 0.2rem;
    }

    .slides {
        width: 40vw;

        position: relative;
        display: grid;
        justify-items: center;

        display: flex;
  
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
    }
    .slides::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    .slides::-webkit-scrollbar-thumb {
        background: var(--main-bg);
        border-radius: 10px;
    }
    .slides::-webkit-scrollbar-track {
        background: transparent;
    }
    .slides > .slide {
        scroll-snap-align: start;
        flex-shrink: 0;
        width: 40vw;
        margin-right: 50px;
        margin: 0 0 10px 0;
        transform-origin: center center;
        transform: scale(1);
        transition: transform 0.5s;
        position: relative;
        
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 100px;
    }

    

</style>
