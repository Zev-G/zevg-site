<script>
    import { timeline, grade11, qnas } from "../../../components/capstone/data";
    import Timeline from "../../../components/Timeline.svelte";
    import SeeMore from "../../../components/SeeMore.svelte";
    
    let displayedTimeline = grade11;
</script>

<Timeline timeline={displayedTimeline} size={450} on:goToEntry={(event) => navigateToPoint(event.detail.point)} />
<SeeMore href="/capstone/present/twelve">Grade 12 ></SeeMore>

<style>
    :global(.inner) {
        font-size: 1.2em;
    }
</style>