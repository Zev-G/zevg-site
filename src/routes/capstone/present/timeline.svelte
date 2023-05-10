<script>
    import { timeline, grade11, grade12, qnas } from "../../../components/capstone/data";
    import Timeline from "../../../components/Timeline.svelte";
    import SeeMore from "../../../components/SeeMore.svelte";
    
    let displayedTimeline = grade11;
    let text = "Grade 12 ";

    function clicked(e) {
        if (displayedTimeline === grade11) {
            e.preventDefault();
            displayedTimeline = grade12;
            text = "Go to Website "
        }
    }
</script>

<Timeline timeline={displayedTimeline} size={450} on:goToEntry={(event) => navigateToPoint(event.detail.point)} />
<SeeMore href="/capstone" on:click={clicked}>{text}></SeeMore>

<style>
    :global(.inner) {
        font-size: 1.2em;
    }
</style>