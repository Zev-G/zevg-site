<script>
    import SeeMore from "./SeeMore.svelte";

</script>

<div class="projects-preview">
    <img src="/projects-preview.png" alt="Projects Preview">
    <SeeMore href="/projects">Check Them Out</SeeMore>
</div>

<style>

    img {
        opacity: 0.75;
        width: clamp(400px, 50vw, 1500px);
    }

    div :global(.see-more) {
        margin-top: 1rem;
    }
    
</style>