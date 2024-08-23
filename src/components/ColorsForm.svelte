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

    const updateColor = (id, colorName, colorHex) => {
        colorStore.updateColor(id, { name: colorName, hex: colorHex });
    }

    const deleteColor = (id) => {
        colorStore.removeColor(id);
    };

    const clearAllColors = () => {
        colorStore.reset();
    };

    //0838C4, B5C700, D4D653
</script>

<div class="flex flex-col space-y-2">
    <div class="flex rounded-md bg-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
        <label class="flex w-1/4 select-none items-center pl-3 text-gray-500 sm:text-sm" for="primary-color">Color name:</label>
        <input type="text" bind:value={colorName}
               class="block flex-1 border-0 bg-transparent pl-1 placeholder:text-gray-400 text-gray-900 py-1.5 focus:ring-0 focus:border-0 outline-none sm:text-sm sm:leading-6"
               placeholder="e.g. primary">
    </div>
    <div>
        <div class="flex rounded-md bg-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
            <label class="flex w-1/4 select-none items-center pl-3 text-gray-500 sm:text-sm" for="primary-color">Add HEX:</label>
            <input type="text" bind:value={colorHex}
                   class="block flex-1 border-0 bg-transparent pl-1 placeholder:text-gray-400 text-gray-900 py-1.5 focus:ring-0 focus:border-0 outline-none sm:text-sm sm:leading-6"
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
                               class="block flex-1 border-0 bg-transparent pl-1 placeholder:text-gray-400 text-gray-900 py-1.5 focus:ring-0 focus:border-0 outline-none sm:text-sm sm:leading-6"
                               placeholder="e.g. primary">
                    </div>
                    <div class="relative">
                        <div class="flex rounded-md bg-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md mr-12">
                            <label class="flex w-1/4 select-none items-center pl-3 text-gray-500 sm:text-sm" for="primary-color">Add HEX:</label>
                            <input type="text" bind:value={color.hex}
                                   class="block flex-1 border-0 bg-transparent pl-[0.85rem] placeholder:text-gray-400 text-gray-900 py-1.5 focus:ring-0 focus:border-0 outline-none sm:text-sm sm:leading-6"
                                   placeholder="e.g. 000000">
                        </div>
                        <span class="text-xs text-gray-400 -mt-1.5">Without #</span>
                        <button type="button" on:click={() => updateColor(color.id, color.name, color.hex)} class="size-9 absolute right-0 top-0 bg-white hover:bg-gray-200 transition-all duration-150 ease-in-out rounded-md flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                            </svg>
                        </button>
                    </div>
                </div>
            {/each}
        </div>
    </div>
{/if}
