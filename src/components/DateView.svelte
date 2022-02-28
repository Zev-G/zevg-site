<script>
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    export let date;
    export let showYear = true;
    
    $: mon = monthNames[new Date(date).getMonth()];
</script>

<div class="date-view">
    {mon + " " + new Date(date).getDate() + (showYear ? (" " + new Date(date).getFullYear()) : "")}
</div>

<style>
    .date-view {
        font-family: monospace;
        font-style: normal;
        font-weight: 500;
        font-size: 17px;

        color: #DEDEDE;
    }
</style>