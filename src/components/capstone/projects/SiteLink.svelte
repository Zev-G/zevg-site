<script>
    export let img;
    export let title;
    export let url;
</script>

<div class="wrapper">
    <a href={url}>
        <div class="inner">
            <img src={img} alt="">
            <h2>{title}</h2>
        </div>
    </a>
</div>


<style>
    a {
        opacity: 0.8;
        transition: opacity 0.2s;
        color: var(--main-text);
        text-decoration: none;
    }

    a:hover {
        opacity: 1;
    }

    a:hover h2 {
        transform: translateX(2vw);
    }

    a:hover img {
        transform: translateX(-2vw);
    }

    h2, img {
        transition: transform 0.2s;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 0em;
        align-items: center;
        justify-content: center;
        margin: 1vh;
    }

    h2 {
        font-size: 4vw;
        margin: 0;
    }

    img {
        width: 32vw;
        opacity: 1;
        border-radius: 1vh;
    }
</style>