<script>
    import { goto } from "$app/navigation";

    import QNAs from "../../components/QNAs.svelte";
    import Timeline from "../../components/Timeline.svelte";
    import BigQuestion from "../../components/BigQuestion.svelte";
    import SeeMore from "../../components/SeeMore.svelte";

    import CapstoneQuestion from "../../components/capstone/CapstoneQuestion.svelte";

    import { timeline, qnas } from "../../components/capstone/data";

    function navigateToPoint(point) {
        if (point.points.length > 0) {
            goto(`/capstone/timeline/${timeline.points.indexOf(point)}`);
        }
    }
</script>

<svelte:head>
  <title>Capstone | Zev Godfrey</title>
</svelte:head>

<main>
    <div id="top">
        <div id="heading">
            <h1 class="page-title">My Capstone</h1>
            <h2 class="subtitle">Zev Godfrey</h2>
        </div>
        <Timeline timeline={timeline} on:goToEntry={(event) => navigateToPoint(event.detail.point)} />
        <BigQuestion answerComponent={CapstoneQuestion} question="Capstone Question" />
        <SeeMore href="/capstone/proposal">Read more... ></SeeMore>
        <QNAs qnas={qnas} />
    </div>
	
</main>

<style>
	
    main {
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: column;
    }

    #top {
        margin-bottom: 3vh;
        padding: 8px;
    }

    #heading {
        margin-bottom: 3vh;
    }

</style>
