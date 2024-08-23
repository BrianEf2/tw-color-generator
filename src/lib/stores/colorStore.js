import { writable } from 'svelte/store';
import { getColors } from 'theme-colors';

function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');

    // Extract individual color components
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Return RGB string in the format "r g b"
    return `${r} ${g} ${b}`;
}

function createColorStore() {
    const { subscribe, set, update } = writable([]);

    const generateColorData = (colorName, colorHex) => {
        const newColor = { id: Date.now(), name: colorName, hex: colorHex };
        const shades = getColors(colorHex);
        newColor.tailwind = {};
        newColor.css = {};

        Object.keys(shades).forEach(shadeKey => {
            const rgb = hexToRgb(shades[shadeKey]);
            const variableName = `--color-${colorName}-${shadeKey}`;
            newColor.tailwind[shadeKey] = `rgb(var(${variableName}) / <alpha-value>)`;
            newColor.css[shadeKey] = `    ${variableName}: ${rgb}`;
        });

        return newColor;
    };

    return {
        subscribe,
        addColor: (colorName, colorHex) => update(colors => {
            const newColor = generateColorData(colorName, colorHex);
            return [...colors, newColor];
        }),
        removeColor: (id) => update(colors => colors.filter(color => color.id !== id)),
        updateColor: (id, newColorData) => update(colors => {
            return colors.map(color => {
                if (color.id === id) {
                    return {
                        ...color,
                        ...newColorData,
                        ...generateColorData(newColorData.name || color.name, newColorData.hex || color.hex)
                    };
                }
                return color;
            });
        }),
        set,
        reset: () => set([])
    };
}

export const colorStore = createColorStore();
