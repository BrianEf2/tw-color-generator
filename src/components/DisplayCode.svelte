<script>
    import { colorStore } from '@stores/colorStore.js';
    import 'svelte-highlight/styles/atom-one-dark.css';
    import Code from "@components/Code.svelte";
    import atomOneDark from "svelte-highlight/styles/atom-one-dark";
    import JSON5 from 'json5';

    let tailwindConfig = {};
    let cssVariables = '';

    colorStore.subscribe(colorStore => {
        tailwindConfig = {
            theme: {
                extend: {
                    colors: colorStore.reduce((acc, color) => {
                        if (color && color.name && color.tailwind) {
                            acc[color.name] = color.tailwind;
                        }
                        return acc;
                    }, {})
                }
            }
        };

        cssVariables = `
:root {
${colorStore.map(color => {
            if (color && color.name && color.css) {
                return Object.keys(color.css).map(shade => {
                    const rgb = color.css[shade];
                    return `${rgb};`;
                }).join('\n');
            }
            return '';
        }).join('\n')}
}`;
    });
</script>

<svelte:head>
    {@html atomOneDark}
</svelte:head>

<main>
    <div class="text-xl font-bold mt-8 mb-2 text-slate-100">Generated Tailwind Config</div>
    <Code language="json" code={JSON5.stringify(tailwindConfig, null, 2).replace(/'(\d+)':/g, '$1:')}/>
    <div class="text-xl font-bold mt-8 mb-2 text-slate-100">Generated CSS Variables</div>
    <Code language="css" code={cssVariables}/>
</main>