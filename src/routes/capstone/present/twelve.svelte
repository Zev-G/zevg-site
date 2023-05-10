<script>
    import { timeline, grade12, qnas } from "../../../components/capstone/data";
    import Timeline from "../../../components/Timeline.svelte";
    import SeeMore from "../../../components/SeeMore.svelte";
    
    let displayedTimeline = grade12;
</script>

<Timeline timeline={displayedTimeline} size={450} on:goToEntry={(event) => navigateToPoint(event.detail.point)} />
<SeeMore href="/capstone/">Go to Website ></SeeMore>

<style>
    :global(.inner) {
        font-size: 1.2em;
    }
</style>