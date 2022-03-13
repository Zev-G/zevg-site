<script>
    import { tick } from "svelte";

    import Section from "../../../components/Section.svelte";

    export let entry;
    export let expanded = false;
    export let depth = 0;

    let entries = {};
    let view;
    let highlighted;

    export function expandEntry(find) {
        let path = findPath(find, [], entry);
        if (path) {
            followPath(path);
        }
    }

    export async function followPath(path) {
        expanded = true;
        if (path.length !== 1) {
            path = path.slice(1);
            await tick();
            entries[entry.points.indexOf(path[0])].followPath(path);
        } else {
            view.scrollIntoView({ behavior: 'smooth', block: 'center' });
            highlighted = true;
            setTimeout(() => highlighted = false, 1500);
        }
    }

    function findPath(find, path, at) {
        path = [...path, at];
        if (find === at) return path;
        else {
            for (let loopEntry of at.points) {
                let searchResult = findPath(find, path, loopEntry);
                if (searchResult) return searchResult;
            }
        }
        return null;
    }

</script>

<div class={"entry-section" + (highlighted ? " highlighted" : "")} bind:this={view}>
    <Section bind:expanded={expanded}>
        <h1 slot="header" style={"--depth: " + depth + ";"}>{entry.name}</h1>
        <div slot="content" class="items">
            <svelte:component this={entry.detailedView} entry={entry}/>
            {#each entry.points as loopEntry, i}
                <svelte:self bind:this={entries[i]} entry={loopEntry} depth={depth + 1}/>
            {/each}
        </div>
    </Section>
</div>


<style>
    h1 {
        margin: 0;
        font-size: calc(2.5em - var(--depth) * 0.3em);
    }

    .items {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .entry-section {
        border-radius: 15px;
    }

    .highlighted {
        animation: showcase 1s 0.5s ease-in-out;
    }

    @keyframes showcase {
        from {
            background-color: transparent;
        }
        50% {
            background-color: var(--main-accent-tint);
        }
        to {
            background-color: transparent;
        }
    }

</style>