import SimpleEntry from "./projects/SimpleEntry.svelte";

export default class ProjectElement {

    start;
    end;
    name;
    explanation;
    points;
    detailedView;

    constructor(start, end, name, explanation = "", points = [], detailedView = SimpleEntry, progress = null) {
        this.start = start;
        this.end = end;
        this.points = points;
        this.explanation = explanation;
        this.name = name;
        this.detailedView = detailedView;
        this.progress = progress;
    }
}