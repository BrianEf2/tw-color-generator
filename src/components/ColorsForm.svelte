<script>
    let colorName = '';
    let colorHex = '';
    let colors = [];

    function add() {
        colors = colors.concat(
            {
                name: colorName,
                hex: colorHex
            }
        )

        clear();
    }

    function clear() {
        colorName = '';
        colorHex = '';
    }

    $:console.log(colors)

</script>

<div class="flex flex-col space-y-2">
    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
        <label class="flex select-none items-center pl-3 text-gray-500 sm:text-sm w-1/4" for="primary-color">Color name:</label>
        <input type="text" bind:value={colorName}
               class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
               placeholder="e.g. primary">
    </div>
    <div>
        <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
            <label class="flex select-none items-center pl-3 text-gray-500 sm:text-sm w-1/4" for="primary-color">Add HEX:</label>
            <input type="text" bind:value={colorHex}
                   class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                   placeholder="e.g. 000000">
        </div>
        <span class="text-xs text-gray-400 -mt-1.5">Without #</span>
    </div>

    <button on:click={add} class="text-sm text-gray-600 bg-transparent hover:bg-green-500 hover:text-white py-3 border-b-2 border-green-500 transition-all duration-200 ease-in-out font-bold uppercase">
        Add new
    </button>
</div>

{#if colors.length > 0}
    <div>
        <h2 class="text-lg font-bold mb-2">Added colors:</h2>
        <div class="flex flex-col space-y-6">
            {#each colors as color, i}
                <div class="flex flex-col space-y-4">
                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                        <label class="flex select-none items-center pl-3 text-gray-500 sm:text-sm w-1/4" for="primary-color">Color name:</label>
                        <input type="text" bind:value={colors[i].name}
                               class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                               placeholder="e.g. primary">
                    </div>
                    <div>
                        <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                            <label class="flex select-none items-center pl-3 text-gray-500 sm:text-sm w-1/4" for="primary-color">Add HEX:</label>
                            <input type="text" bind:value={colors[i].hex}
                                   class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                   placeholder="e.g. 000000">
                        </div>
                        <span class="text-xs text-gray-400 -mt-1.5">Without #</span>
                    </div>
                </div>
            {/each}
        </div>
    </div>
{/if}