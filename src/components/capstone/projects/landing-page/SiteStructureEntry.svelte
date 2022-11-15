<script>
    export let entry;
</script>

<div>
    <p>{entry.explanation}</p>
    <p>The timeline will (by far) be the most difficult thing to implement. The logic is pretty straightforward, most of the difficulty is in the design. To help myself visualize what I'm building I want to make a design for what I want in Figma. Here's what that ended up looking like:</p>
    <img src="/timeline-design.png" alt="Figma design of timeline">
    <p>
        I found this very strategy very useful, and plan reimploying it in the future in cases where I'm having trouble visualizing a final result.
    </p>
    <p>
        The next portion of the project was adding the QnA and Capstone Inquiry question to the site, which was quite straightforward.
    </p>
</div>

<style>
    img {
        filter: drop-shadow(0 0 4px var(--drop-shadow-color));
        width: 65vw;
    }
</style>