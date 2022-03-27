<script>
    export let imgSrc;
</script>

<div class="card">
    <img alt="Card showcase" src={imgSrc}>
    <div class="content">
        <slot name="heading"></slot>
        <slot name="content"></slot>
    </div>
</div>

<style>

    img {
        /* aspect-ratio: 4 / 2; */
        width: clamp(100px, 40vw, 500px);
        border-radius: 1rem 1rem 0 0;
    }

    .card {
        background-color: var(--item-bg);
        border-radius: 1rem;
        filter: drop-shadow(0px 0px 4px var(--drop-shadow-color));
        cursor: pointer;
        transition: transform 0.2s;
        width: clamp(100px, 40vw, 500px);

        font-size: clamp(10px, 2vw, 20px);
    }

    @media(max-width: 750px) {
        .card {
            width: 100%;
            font-size: clamp(10px, 6vw, 20px);
        }

        img {
            width: 100%;
        }
    }

    .card:hover {
        transform: scale(1.03) translateY(-5px);
    }

    .content {
        margin: 0.5rem 1.5rem 1.5rem 1.5rem;
        text-align: left;
    }
</style>