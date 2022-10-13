<script>
    export let imgSrc;
    export let href = "";
</script>

<div class="card">
    <!-- <a href={href}> -->
        <img alt="Card showcase" src={imgSrc}>
        <div class="content">
            <slot name="heading"></slot>
            <slot name="content"></slot>
        </div>
    <!-- </a> -->
</div>


<style>
    img {
        aspect-ratio: 4 / 2;
        object-fit: cover;
        width: clamp(100px, 40vw, 500px);
        border-radius: 1rem 1rem 0 0;
    }

    a {
        color: var(--main-text);
        text-decoration: none;
        background-color: var(--item-bg);
    }

    .card {
        background-color: var(--item-bg);
        border-radius: 1rem;
        filter: drop-shadow(0px 0px 4px var(--drop-shadow-color));
        /* cursor: pointer; */
        transition: transform 0.2s;
        width: clamp(100px, 40vw, 500px);

        font-size: clamp(8px, 1.6vw, 16px);

        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
        transform: translateY(-12px);
    }

    .content {
        margin: 0.5rem 1.5rem 1.5rem 1.5rem;
        text-align: left;
    }
</style>