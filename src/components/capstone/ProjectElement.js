import SimpleEntry from "./projects/SimpleEntry.svelte";

export default class ProjectElement {

    start;
    end;
    name;
    explanation;
    points;
    detailedView;
    topDisplay;

    constructor(start, end, name, explanation = "", points = [], detailedView = SimpleEntry, progress = null, topDisplay = null) {
        this.start = start;
        this.end = end;
        this.points = points;
        this.explanation = explanation;
        this.name = name;
        this.detailedView = detailedView;
        this.progress = progress;
        this.topDisplay = topDisplay;
    }
}