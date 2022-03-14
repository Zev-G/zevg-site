<script>
    import { javascript } from "svelte-highlight/src/languages";
    import Code from "../../../../components/Code.svelte";
    
    export let entry;
</script>

<div>
    <p>{entry.explanation}</p>
    <p>
        Loading a page dynamically via its URL is made easy by SvelteKit. All I need to do is add a script to the module context of a file named <i>[id].svelte</i>.
    </p>
    <Code language="svelte" fileName="[id].svelte" code={
`<script context="module">
    export async function load({params, props}) {
        return {
            props: {
                id: params.id
            }
        };
    }
</script>

<script>
    export let id;
</script>

...`
    } />
    <p>This code means that every version of the page will correspond to a particular id. This means the data I use to populate the page will need to be accessed dynamically via this id. </p>
    <p>The timeline data restructuring can be done by creating a ProjectElement class:</p>
    <Code language={javascript} fileName="ProjectElement.js" code={
`import SimpleEntry from "./projects/SimpleEntry.svelte";

export default class ProjectElement {

    start;
    end;
    name;
    explanation;
    points;
    detailedView;

    constructor(start, end, name, explanation = "", points = [], detailedView = SimpleEntry) {
        this.start = start;
        this.end = end;
        this.points = points;
        this.explanation = explanation;
        this.name = name;
        this.detailedView = detailedView;
    }
}`
    } />
    <p>This way each ProjectElement could contain a list of its own ProjectElements.</p>
</div>

<style>

</style>