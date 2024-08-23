<script>
    import { HighlightAuto, LineNumbers } from "svelte-highlight";
    import atomOneDark from "svelte-highlight/styles/atom-one-dark";

    export let code = '';
    export let language;

    $: console.log(code);
</script>

<svelte:head>
    {@html atomOneDark}
</svelte:head>

<HighlightAuto language={language} {code} let:highlighted>
    <LineNumbers {highlighted} hideBorder/>
</HighlightAuto>
