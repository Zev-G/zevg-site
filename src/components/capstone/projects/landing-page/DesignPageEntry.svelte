<script>
    import Code from "../../../Code.svelte";

    export let entry;

    let ogSectionCode =
`<script>
    export let expanded = false;
<\/script>

<div class="setion">
    <div class={"header " + (expanded ? "expanded" : "")} on:click={() => expanded = !expanded}>
        <slot name="header"></slot>
    </div>
    {#if expanded}
        <hr>
        <div class="content">
            <slot name="content"></slot>
        </div>
    {/if}
</div> `;

    let finalSectionCode = 
`<script>
    import IoIosArrowForward from 'svelte-icons/io/IoIosArrowForward.svelte'
    export let expanded = false;
<\/script>

<div class="setion">
    <div class={"header " + (expanded ? "expanded" : "")} on:click={() => expanded = !expanded}>
        <slot name="header"></slot>
        <div class="mid-icon">
            <IoIosArrowForward />
        </div>
    </div>
    {#if expanded}
        <hr>
        <div class="content">
            <slot name="content"></slot>
        </div>
    {/if}
</div>`
;
</script> 

<div>
    <p>{entry.explanation}</p>
    <p>
        To do this I'm creating <strong>Sections</strong>. Each section has a header and content. This content can be expanded, but is minimized by default so the user isn't overwhelmed with content.
    </p>
    <Code fileName="Section.svelte" language="svelte" code={ogSectionCode}/>
    <p>
        This works but I thought it would be nice to add an icon showing if the Section was expanded or not. To do this I added the <a href="https://github.com/Introvertuous/svelte-icons">svelte-icons</a> library to my project, making the process quite simple.
    </p>
    <Code fileName="Section.svelte" language="svelte" code={finalSectionCode}/>
</div>

<style>

</style>