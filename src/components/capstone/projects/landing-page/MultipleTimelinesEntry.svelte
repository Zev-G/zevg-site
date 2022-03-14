<script>
    export let entry;
</script>

<div>
    <p>{entry.explanation}</p>
    <p>Restructuring the timeline was very difficult because the entirety of the code wasn't created for the timeline variable to be reassigned (something which supporting switching between multiple timelines requires). The details of refactoring the code to support this are too complicated and extensive to be documented here, but the change can be seen in <a href="https://github.com/Zev-G/zevg-site/commit/9010ca3050041589d41a586cb26f56821dcc9e42">this commit</a>.</p>
</div>