<script>
    import { colorStore } from '@stores/colorStore.js';

    let colorName = '';
    let colorHex = '';

    const addColor = () => {
        if (colorName.trim() && colorHex.trim()) {
            colorStore.addColor(colorName, colorHex);
            colorName = '';
            colorHex = '';
        }
    };

    const deleteColor = (id) => {
        colorStore.removeColor(id);
    };

    const clearAllColors = () => {
        colorStore.reset();
    };
</script>

<div class="flex flex-col space-y-2">
    <div class="flex rounded-md bg-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
        <label class="flex w-1/4 select-none items-center pl-3 text-gray-500 sm:text-sm" for="primary-color">Color name:</label>
        <input type="text" bind:value={colorName}
               class="block flex-1 border-0 bg-transparent pl-1 placeholder:text-gray-400 text-gray-900 py-1.5 focus:ring-0 sm:text-sm sm:leading-6"
               placeholder="e.g. primary">
    </div>
    <div>
        <div class="flex rounded-md bg-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
            <label class="flex w-1/4 select-none items-center pl-3 text-gray-500 sm:text-sm" for="primary-color">Add HEX:</label>
            <input type="text" bind:value={colorHex}
                   class="block flex-1 border-0 bg-transparent pl-1 placeholder:text-gray-400 text-gray-900 py-1.5 focus:ring-0 sm:text-sm sm:leading-6"
                   placeholder="e.g. 000000">
        </div>
        <span class="text-xs text-gray-400 -mt-1.5">Without #</span>
    </div>

    <button on:click={addColor}
            class="border-b-2 border-green-500 bg-glass py-3 text-sm font-bold uppercase text-slate-50 transition-all duration-200 ease-in-out hover:bg-green-500 hover:text-white">
        Add new
    </button>
</div>

{#if $colorStore.length > 0}
    <div>
        <h2 class="mb-2 text-lg font-bold text-slate-50">Added colors:</h2>
        <div class="flex flex-col space-y-6">
            {#each $colorStore as color, index}
                <div class="flex flex-col space-y-4">
                    <div class="flex rounded-md bg-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                    <label class="flex w-1/4 select-none items-center pl-3 text-gray-500 sm:text-sm" for="primary-color">Color name:</label>
                        <input type="text" bind:value={color.name}
                               class="block flex-1 border-0 bg-transparent pl-1 placeholder:text-gray-400 text-gray-900 py-1.5 focus:ring-0 sm:text-sm sm:leading-6"
                               placeholder="e.g. primary">
                    </div>
                    <div>
                        <div class="flex rounded-md bg-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                        <label class="flex w-1/4 select-none items-center pl-3 text-gray-500 sm:text-sm" for="primary-color">Add HEX:</label>
                            <input type="text" bind:value={color.hex}
                                   class="block flex-1 border-0 bg-transparent pl-1 placeholder:text-gray-400 text-gray-900 py-1.5 focus:ring-0 sm:text-sm sm:leading-6"
                                   placeholder="e.g. 000000">
                        </div>
                        <span class="text-xs text-gray-400 -mt-1.5">Without #</span>
                    </div>
                </div>
            {/each}
        </div>
    </div>
{/if}
