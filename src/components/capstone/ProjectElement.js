export default class ProjectElement {

    start;
    end;
    name;
    explanation;
    points;

    constructor(start, end, name, explanation = "", points = []) {
        this.start = start;
        this.end = end;
        this.points = points;
        this.explanation = explanation;
        this.name = name;
    }
}