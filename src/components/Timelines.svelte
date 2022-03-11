<script>
    export let timelines;
    export let selected = findTimelineMatchingDate(Date.now());

    function findTimelineMatchingDate(date) {
        if (date <= timelines[0].start) return timelines[0];
        if (date >= timelines[timelines.length - 1]) return timelines[timelines.length - 1];
        for (let timeline in timelines) {
            
        }
    }
</script>

