function getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function formatInt(number: number) {
    return new Intl.NumberFormat().format(number);
}

export function formattedRandomNumber(min: number, max: number) {
    return formatInt(getRandomInt(min, max));
}